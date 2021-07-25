let graphic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  graphic = createGraphics(windowWidth, windowHeight);

  graphic.fill('#C768FF');
  graphic.textSize(width / 5);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('wow', windowWidth / 2, windowHeight / 2);
}

function draw() {
  background('#7045FF');

  const tileSize = 12;

  for (let y = 0; y < 50; y = y + 1) {
    let position = winMouseX / windowWidth;
    position = easeInOutCubic(position);

    const sx = 0;
    const sy = y * tileSize * position;
    const sw = windowWidth;
    const sh = tileSize * position + (windowHeight - tileSize) * (1 - position);

    const dx = 0;
    const dy = y * tileSize;
    const dw = windowWidth;
    const dh = tileSize;

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
  }
}
