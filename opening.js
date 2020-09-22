function drawBoard(skew) {
        // Setup
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          // Board colour:
          ctx.fillStyle = "#b5662d";
          ctx.fillRect(0, 0, canvas.width, canvas.height);


          // Draw the lines:
          var i = 0  
          while(i < 19) {
              ctx.moveTo(15, 15+i*30);
               ctx.lineTo(555, 15+i*30);
               i++;
          }

          var i = 0       
          while(i < 19) {
               ctx.moveTo(15+i*30, 15);
               ctx.lineTo(15+i*30, 555);
               i++;
          }

          ctx.strokeStyle = "black";
              ctx.stroke();         


          // Draw the star points:
          x = y = 105
          
          var i = j = 0
          for(j = 0; j < 3; j++) {
            for(i = 0; i < 3; i++) {
              ctx.moveTo(x+i*180, y+j*180);
            ctx.fillStyle = "black";
              ctx.arc(x+i*180, y+j*180, 4, 0, Math.PI*2);
              ctx.fill();
              };
          };

          
          //place the stones

          for(i=0; i<4; i++) {
            blackStone(getCoords(skew), getCoords(skew));
          }
        }
    }

function blackStone(x, y) {
  // place a stone at (x, y), where x and y are integer coordinates on the board
  // (1, 1) is the top left corner, (1, 19) is the bottom left, etc.
  var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          ctx.beginPath()
          ctx.fillStyle = "black";
          ctx.moveTo(15+(x-1)*30, 15+(y-1)*30);
          ctx.arc(15+(x-1)*30, 15+(y-1)*30, 14, 0, Math.PI*2);
          ctx.fill();
  };
}


function getCoords(skew) {
  var seed = Math.random()*(7.5**(1/skew));
  coord = Math.round(2.5+seed**skew)

  if (Math.random() < 0.5) {
    coord = 18 - coord;
  };

  return coord;
};
