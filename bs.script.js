function drawLine(x0, y0, x1, y1) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        ctx.fillRect(x0, y0, 1, 1);

        if (x0 === x1 && y0 === y1) {
            break;
        }

        const e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}

drawLine(10, 200, 110, 200);
drawLine(10, 50, 110, 50);
drawLine(10, 350, 110, 350);
drawLine(10, 50, 10, 200);
drawLine(110, 200, 110, 350);

drawLine(200, 350, 250, 200);
drawLine(300, 350, 250, 200);

drawLine(150, 50, 200, 350);
drawLine(350, 50, 300, 350);

drawLine(390, 200, 490, 200);
drawLine(390, 50, 390, 350);
drawLine(390, 350, 490, 350);
drawLine(390, 50, 490, 50);

drawLine(0, 0, 500, 400);