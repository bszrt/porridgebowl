function drawBoard() {
        // Setup
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          ctx.clearRect(0, 0, canvas.width, canvas.height);

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

          var d = document.getElementById("distance").value;
          
          //place the stones

          var coordList = getList(d);

          stone(coordList[0])
          stone(coordList[1])
          stone(coordList[2])
        }
    }

function getList(d) {
  var coordList = [];

  for(i = 0; i < 3; i++) {
    coordList.push(getCoords());
  }

  if(minDistance(coordList[0], coordList[1], coordList[2]) > d) {
    return coordList;
  } else {
    return getList(d);
  }
}

function hypotDistance(x, y, x1, y1) {
  return Math.hypot(x-x1, y-y1);
}

function minDistance(coordA, coordB, coordC) {
  var ab = Math.hypot(coordA[0] - coordB[0], coordA[1] - coordB[1])
  var ac = Math.hypot(coordA[0] - coordC[0], coordA[1] - coordC[1])
  var bc = Math.hypot(coordC[0] - coordB[0], coordC[1] - coordB[1])

  return Math.min(ab, ac, bc);
}

function stone(coordList) {
	// place a stone at (x, y), where x and y are integer coordinates on the board
	// (1, 1) is the top left corner, (1, 19) is the bottom left, etc.
	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          x = coordList[0];
          y = coordList[1];

          ctx.beginPath()
          ctx.fillStyle = "black";
			    ctx.moveTo(15+(x-1)*30, 15+(y-1)*30);
    		  ctx.arc(15+(x-1)*30, 15+(y-1)*30, 14, 0, Math.PI*2);
    		  ctx.fill();
	};
}

function getCoords() {
  return [Math.floor(Math.random()*15+3), Math.floor(Math.random()*15+3)];
};