var algebra = require('../vendor/algebra-0.2.6.min.js');

function getVector(x,y) {
  // console.log("getting vector");
  var dxdt = new algebra.Expression("x");
  dxdt = dxdt.multiply("x");
  dxdt = dxdt.subtract("y");

  var dydt = new algebra.Expression("x");
  dydt = dydt.subtract("y");

  return [dxdt.eval({x: x, y: y}).toString(),dydt.eval({x: x, y: y}).toString()];
}

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 600;
  canvasEl.height = 600;
  var ctx=canvasEl.getContext("2d");
  let arr=[];
  for (var i = -6; i <= 6; i++) {
    arr.push([]);
    for (var j = -6; j <= 6; j++) {
      let vector=getVector(i,j);
      arr[i+6][j+6]=vector;
      ctx.beginPath();
      ctx.moveTo((i+6)*50,(j+6)*50);
      ctx.lineTo(((i+6)*50)+parseFloat(vector[0]),((j+6)*50)+parseFloat(vector[1]));
      ctx.stroke();
    }
  }
  console.log(arr);
});




var dxdt = new algebra.Expression("x");
dxdt = dxdt.multiply("x");
dxdt = dxdt.subtract("y");

var dydt = new algebra.Expression("x");
dydt = dydt.subtract("y");
