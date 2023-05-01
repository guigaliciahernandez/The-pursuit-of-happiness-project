document.addEventListener("DOMContentLoaded", function () {
    const goodNewsArray = [
      "A new community garden just opened in the city!",
      "A local shelter helped dozens of animals find their forever homes today.",
      "Scientists discovered a new way to recycle plastic waste.",
      "A generous donor gave $1 million to a local charity organization.",
      "A high school student just won a prestigious scholarship.",
    ];
   
    discoverButton.addEventListener("click", function (event) {
      event.preventDefault();
    
      // Change the headline text
      headline.textContent =
        "Happiness can't be caught, but it's within you. Keep chasing it! :)";
      headline.classList.add("pulsing");
    
      // Reset the previous translation
      discoverButton.style.transform = "";
    
      // Move the button to a random position within the page
      const pageWidth = document.body.scrollWidth - discoverButton.offsetWidth;
      const pageHeight = document.body.scrollHeight - discoverButton.offsetHeight;
      const newX = Math.floor(Math.random() * pageWidth);
      const newY = Math.floor(Math.random() * pageHeight);
      discoverButton.style.position = "absolute";
      discoverButton.style.top = `${newY}px`;
      discoverButton.style.left = `${newX}px`;
    
      // Remove the previous click event listener
      discoverButton.removeEventListener("click", handleClick);
    
      // Add a new click event listener
      discoverButton.addEventListener("click", handleClick);
    });
    
    function handleClick(event) {
      event.preventDefault();
      alert("Button clicked!");
    }
    
  
    const cursorTrailCanvas = document.getElementById('cursorTrailCanvas');
    const ctx = cursorTrailCanvas.getContext('2d');
    cursorTrailCanvas.width = window.innerWidth;
    cursorTrailCanvas.height = window.innerHeight;
  
    const stars = [];
    const trailLength = 30;
  
    class Star {
        constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 5 + 10;
          this.weight = Math.random() * 1.5 - 0.8;
          this.color = color;
        }
    
        update() {
          this.weight += 0.03;
    
          if (this.weight > 0.8) {
            this.y += this.weight;
            this.x -= this.size;
          }
        }
    
        draw() {
          ctx.fillStyle = this.color || 'rgba(255, 255, 0, 1)';
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
  
   // Add the given JS effect here

  