function drawGrid() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

   
    var gridSize = 50;  
    ctx.strokeStyle = "#ccc"; 
    ctx.fillStyle = "black";  
    ctx.font = "10px Arial"; 

    for (var x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.fillText(x, x, 10);
    }

    for (var y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        ctx.fillText(y, 1, y);
    }
}

drawGrid();
