function drawCircle(h, k, r) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var d = 3 - 2 * r;

    var x = 0;
    var y = r;

    // let even = 5;
    while (x <= y) {

        // if (even % 5 == 0) {
        //     even++;
        // }

        // else {
        ctx.fillRect(h + x, k + y, 1, 1);
        ctx.fillRect(h + y, k + x, 1, 1);
        ctx.fillRect(h - y, k + x, 1, 1);
        ctx.fillRect(h - x, k + y, 1, 1);
        ctx.fillRect(h - x, k - y, 1, 1);
        ctx.fillRect(h - y, k - x, 1, 1);
        ctx.fillRect(h + y, k - x, 1, 1);
        ctx.fillRect(h + x, k - y, 1, 1);

        //     even++;
        // }



        if (d < 0) {
            d = d + 4 * x + 6;
        }
        else {
            d = d + 4 * (x - y) + 10;
            y--;
        }
        x++;
    }
}


function drawHalfCircle(h, k, r) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var d = 3 - 2 * r;

    var x = 0;
    var y = r;

    let even = 5;
    while (x <= 50) {

        if (even % 5 == 0) {
            even++;
        }

        else {
            ctx.fillRect(h + x, k + y, 1, 1);
            // ctx.fillRect(h + y, k + x, 1, 1);
            // ctx.fillRect(h - y, k + x, 1, 1);
            ctx.fillRect(h - x, k + y, 1, 1);
            // ctx.fillRect(h - x, k - y, 1, 1);
            // ctx.fillRect(h - y, k - x, 1, 1);
            // ctx.fillRect(h + y, k - x, 1, 1);
            // ctx.fillRect(h + x, k - y, 1, 1);

            even++;
        }



        if (d < 0) {
            d = d + 4 * x + 6;
        }
        else {
            d = d + 4 * (x - y) + 10;
            y--;
        }
        x++;
    }
}


// drawHalfCircle(250, 200,
//     Math.sqrt(Math.pow(250 - 200, 2) + Math.pow(200 - 350, 2)));

// drawCircle(250, 100, 50);

drawCircle(400, 300, 100);