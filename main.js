// Draw Door Function by Muskan 

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  drawDoor(100, 100, "black" );
  ctx.fillStyle = "blue";
  ctx.fillRect(100, 110, 200, 80);
}

  function draw() {
    drawDoor(200, 200, "yellow" );
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 110, 200, 80);
  }
  {
  // Redraw
  requestAnimationFrame(draw);
}

function drawDoor(x, y, frameColor) {
ctx.fillStyle = frameColor;
ctx.fillRect(x, y, 60, 100);
}

// Define & Invoke a Function

function displayGreeting() {
console.log("Hello");
console.log("This is a function")
}


