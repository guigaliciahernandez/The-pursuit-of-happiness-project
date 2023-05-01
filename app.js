document.addEventListener('DOMContentLoaded', function () {
  const cursorTrailCanvas = document.getElementById('cursorTrailCanvas');
  const ctx = cursorTrailCanvas.getContext('2d');
  cursorTrailCanvas.width = window.innerWidth;
  cursorTrailCanvas.height = window.innerHeight;

  const stars = [];
  const trailLength = 30;

  class Star {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 20; // Increase the size of the yellow dots
        this.weight = Math.random() * 1.5 - 0.8;
      }
    
      update() {
        this.weight += 0.01;
    
        if (this.weight > 0.8) {
          this.y += this.weight;
          this.x -= this.size;
        }
      }
    
      draw() {
        // Draw yellow circle
        ctx.fillStyle = 'rgba(255, 255, 0, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    
        // Draw eyes
        ctx.fillStyle = 'black'; // Change the color of the eyes to white
        ctx.beginPath();
        ctx.arc(this.x - this.size / 2, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
        ctx.arc(this.x + this.size / 2, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    
        // Draw smile
        ctx.beginPath();
        ctx.arc(this.x, this.y + this.size / 4, this.size / 2, 0, Math.PI);
        ctx.strokeStyle = 'black'; // Change the color of the smile to white
        ctx.lineWidth = this.size / 4;
        ctx.stroke();
      }
    }      
    

  function createStar(e) {
    const xPos = e.x;
    const yPos = e.y;
    for (let i = 0; i < trailLength; i++) {
      stars.push(new Star(xPos, yPos));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, cursorTrailCanvas.width, cursorTrailCanvas.height);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].draw();

      if (stars[i].y > cursorTrailCanvas.height) {
        stars.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('mousemove', createStar);
  animate();
});

