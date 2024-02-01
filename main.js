// Draw Door Function by Muskan 

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  ctx.fillStyle = "green";
  ctx.fillRect(50, 100, 200, 80);

  // Redraw
  requestAnimationFrame(draw);
}

function drawDoor(x, y, frameColor) {

}

// Define & Invoke a Function

function displayGreeting() {
console.log("Hello");
console.log("This is a function")
}

// DEFINE A FUNCTION

// PARAMETERS ARE: name & timeOfDay
function displayGreeting(name, timeOfDay) {
  console.log('Hello ' + name + '.');
  console.log('Have a good ' + timeOfDay + '!');
}

//INVOKE FUNCTION WITH DIFFERENT ARGUMENTS
displayGreeting('Megan', 'Morning');
// Arguments are 'Megan' & 'Morning'
// -> Hello Megan. Have a good Morning!


displayGreeting('Azra', 'Afternoon');
// Arguments are 'Azra' & 'Afternoon'
// -> Hello Azra. Have a good Afternoon!


displayGreeting('Nathan', 'Night');
// Arguments are 'Nathan' & 'Night'
// -> Hello Nathan. Have a good Night!


