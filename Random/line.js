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


// image 1
drawLine(150, 400, 300, 300);
drawDottedLine(300, 300, 155, 250);
drawDottedLine(150, 400, 295, 450);

// image 2
drawLine(350, 450, 500, 450);
drawLine(350, 450, 350, 250);
drawLine(350, 250, 500, 250);
drawLine(500, 250, 500, 450);

// image 3
drawDottedLine(550, 400, 700, 300);
drawLine(700, 300, 550, 250);
drawLine(550, 400, 700, 450);

// image 4
drawLine(750, 250, 750, 350);
drawLine(750, 350, 870, 350);
drawLine(850, 340, 850, 450);