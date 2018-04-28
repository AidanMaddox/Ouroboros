function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(120);
}

function draw(){
	background('#FFFFFF');
}