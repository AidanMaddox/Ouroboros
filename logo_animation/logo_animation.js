var beads = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(120);
	for (var i = 0; i < 8; i++) {
		beads[i] = new Bead();
	}
}

function draw(){
	rotateX(mouseY * .00625);
	rotateY(mouseX * .00625);
	rotateY(frameCount * .0125);
	background('#FFFFFF');
	for (var i = 0; i < beads.length; i++) {
		translate(0,25);
		beads[i].display();
	}
}

function Bead(){
	var size = 0;
	var twist = 0;
	fill('#212121');
	noStroke();

	this.display = function(){
		if(size < 3.25){
			size+=.125;
		}
		if(twist < 250){
			twist+=1;
		}
		rotateX(-twist * .0125);
		rotateY(-twist * .0125);
		sphere(size);
		rotate(PI/4);
	}
}