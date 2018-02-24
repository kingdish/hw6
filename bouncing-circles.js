//A rectangle will be drawn if a ball hits the boundary
//The size and location of the rectange is based on the
//index of the ball in the array
var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-1.5, 1.5),
      yd: random(-1.5, 1.5),
      c: color(random(360), 60, 100),
      r: random(10, 20),
      hit: false
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];
		circle.hit = false;
    // draw it
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
      circle.r -= 2;
      circle.hit = true;
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
      circle.r -= 2;
      circle.hit = true;
    }
    if (circle.r <= 0) {
    	circle.r = random(10, 20);
    	circle.x = width / 2;
      circle.y = height / 2;
    }
    
    push();
    colorTemp = random(155, 255);
    stroke(colorTemp, colorTemp, colorTemp);
    noFill();
    for (var i = 0; i < 100; i = i + 1) {
      if (circles[i].hit == true) {
      	rect(width / 100 * i, height / 100 * i, width - width / 100 * i * 2, height - height / 100 * i * 2);
    	}
    }
    pop();
  }
}
