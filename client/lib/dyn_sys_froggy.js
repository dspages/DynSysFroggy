var algebra = require('../vendor/algebra-0.2.6.min.js');

const SCALE = 50.0;

function getVector(x,y) {
  // console.log(x);
  // console.log(y);
  // console.log("getting vector");
  // var dxdt = new algebra.Expression("x");
  // dxdt = dxdt.multiply("x");
  // dxdt = dxdt.subtract("y");
  //
  // var dydt = new algebra.Expression("x");
  // dydt = dydt.subtract("y");

  // return [-x,(-x*y)+x*5];
  // return [Math.cos(y*y)*5,Math.sin(x-y)*5];
  // return [y-x,Math.cos((x*x)-(y*y))];
  return [(x*x)-y,x-y];
}

function line(from, to, ctx, color="black") {
  ctx.beginPath();
  ctx.moveTo((from[0]+6)*SCALE,(from[1]+6)*SCALE);
  ctx.lineTo((to[0]+6)*SCALE,(to[1]+6)*SCALE);
  ctx.strokeStyle=color;
  ctx.stroke();
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
      line([i,j],
      [(i)+parseFloat(vector[0])/SCALE,(j)+parseFloat(vector[1])/SCALE],ctx);
    }
  }
  console.log(arr);


  let trajectoryx=[-5,-1,1,2,0.5,.5,5,5];//set initial conditions
  let trajectoryy=[5,5,3,3,0.5,0,-5,5];//set initial conditions
  let oldVec = [];
  let newVec = [];
  for (var j = 0; j < trajectoryx.length; j++) {
    oldVec=getVector(trajectoryx[j], trajectoryy[j]);
    for (var i = 0; i<100; i++) {
      let x = parseFloat(oldVec[0]);
      let y = parseFloat(oldVec[1]);
      newVec=getVector(x,y);
      newVec[0]/=SCALE;
      newVec[1]/=SCALE;
      newVec[0]+=x;
      newVec[1]+=y;
      console.log(oldVec);
      console.log(newVec);
      line(oldVec,newVec,ctx, "red");
      oldVec=newVec;
    }
  }

});




var dxdt = new algebra.Expression("x");
dxdt = dxdt.multiply("x");
dxdt = dxdt.subtract("y");

var dydt = new algebra.Expression("x");
dydt = dydt.subtract("y");
