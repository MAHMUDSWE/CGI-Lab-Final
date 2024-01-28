function drawLine(x, y, x2, y2) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    let dx = Math.abs(x2 - x);
    let dy = Math.abs(y2 - y);

    let d;

    if (dy <= dx) {
        d = 2 * dy - dx;

        if (x2 < x) {
            let temp = x;
            x = x2;
            x2 = temp;

            temp = y;
            y = y2;
            y2 = temp;
        }

        while (x <= x2) {
            ctx.fillRect(x, y, 1, 1);

            if (d < 0) {
                d += 2 * dy;
            }
            else if (d >= 0) {
                d += 2 * (dy - dx);
                if (y2 > y) {
                    y++;
                }
                else {
                    y--;
                }
            }

            x++;
        }
    } else if (dy > dx) {

        d = 2 * dx - dy;
        if (y2 < y) {
            let temp = y;
            y = y2;
            y2 = temp;

            temp = x;
            x = x2;
            x2 = temp;
        }

        while (y <= y2) {
            ctx.fillRect(x, y, 1, 1);

            if (d < 0) {
                d += 2 * dx;
            } else if (d >= 0) {
                d += 2 * (dx - dy);
                if (x2 > x) {
                    x++;
                } else {
                    x--;
                }
            }
            y++;
        }
    }
}
function drawDottedLine(x, y, x2, y2) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    let dx = Math.abs(x2 - x);
    let dy = Math.abs(y2 - y);

    let d;

    if (dy <= dx) {
        d = 2 * dy - dx;

        if (x2 < x) {
            let temp = x;
            x = x2;
            x2 = temp;

            temp = y;
            y = y2;
            y2 = temp;
        }

        var even = 3;
        while (x <= x2) {
            if (even % 3 == 0) {
                even++;
            }
            else {
                ctx.fillRect(x, y, 1, 1);
                even++;
            }

            if (d < 0) {
                d += 2 * dy;
            }
            else if (d >= 0) {
                d += 2 * (dy - dx);
                if (y2 > y) {
                    y++;
                }
                else {
                    y--;
                }
            }

            x++;
        }
    } else if (dy > dx) {

        d = 2 * dx - dy;
        if (y2 < y) {
            let temp = y;
            y = y2;
            y2 = temp;

            temp = x;
            x = x2;
            x2 = temp;
        }

        while (y <= y2) {
            ctx.fillRect(x, y, 1, 1);

            if (d < 0) {
                d += 2 * dx;
            } else if (d >= 0) {
                d += 2 * (dx - dy);
                if (x2 > x) {
                    x++;
                } else {
                    x--;
                }
            }
            y++;
        }
    }
}

export { drawLine };

// left side
drawLine(250, 500, 250, 150);
drawLine(200, 500, 200, 150);
drawLine(200, 150, 250, 150);
drawLine(200, 500, 250, 500);

// right side
drawLine(550, 500, 600, 500);
drawLine(600, 500, 600, 150);
drawLine(550, 500, 550, 150);
drawLine(550, 150, 600, 150);

drawLine(100, 500, 700, 500); // top line
drawLine(200, 590, 600, 590); //below line
// drawLine(200, 590, 150, 550);
drawLine(600, 590, 650, 550); // connecting line dot

drawDottedLine(150, 550, 650, 550); // dotted line
drawDottedLine(150, 550, 100, 500);
drawDottedLine(650, 550, 700, 500);

// below circle
drawLine(400, 400, 400, 500);
drawLine(350, 500, 350, 386);
drawLine(450, 500, 450, 386);

// above circle
drawLine(350, 150, 350, 214);
drawLine(450, 150, 450, 214);
drawLine(400, 150, 400, 200);

// top curve

drawLine(350, 150, 400, 50);
drawLine(400, 150, 450, 50);
drawLine(450, 150, 500, 50);
drawLine(400, 50, 500, 50);