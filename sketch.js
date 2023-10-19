function setup() {
  createCanvas(500, 500);

  noLoop();
}

function draw() {
  background(0, 200, 150, 70);
  noFill();
  stroke(10);

  let d = random(10, 100);
  let space = 5;

  for (let potx = 0; potx < 500; potx += d + 5) {
    for (let poty = 0; poty < 500; poty += d + 5) square(potx, poty, d);
  }
}
