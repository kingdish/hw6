var circles = [];
var numOfCircles = 15;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  fill(100, 100, 50)
  for (var index = 0; index < numOfCircles; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2 + random(-150, 150),
      y: height / 2 + random(-150, 150),
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

  for (var index = 0; index < numOfCircles; index = index + 1) {
    // get circle object
    var circle = circles[index];
		circle.hit = false;

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;
		fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);
		for (var i = 0; i < numOfCircles; i = i + 1) {
    	if (circles[i] != circle && checkCollision(circle, circles[i]) == true) {
      	var temp1 = circles[i].xd
        circles[i].xd = circle.xd;
        circle.xd = temp1;
        var temp2 = circles[i].yd
        circles[i].yd = circle.yd;
        circle.yd = temp2;
      }
    }
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

  }
}

function checkCollision(a, b){
  var distance = Math.sqrt((float) ((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)))
  return distance < (a.r / 2 + b.r / 2);
}
