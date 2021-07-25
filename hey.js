let graphic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  graphic = createGraphics(windowWidth, windowHeight);
  graphic.fill('#88fff7');
  graphic.textSize(width / 5);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('Hello!', windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#7c83fd');
  const tileSize = width / 20;

  for (let x = 0; x < 50; x = x + 1) {
    for (let y = 0; y < 50; y = y + 1) {
      const distortion = sin(frameCount * 0.05 + x * 0.2 + y * 0.4) * 30;
      // source
      const sx = x * tileSize + distortion;
      const sy = y * tileSize;
      const sw = tileSize;
      const sh = tileSize;
      // destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
