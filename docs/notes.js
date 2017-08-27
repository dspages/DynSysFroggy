// Some functions with potentially interesting behavior

// [(y*x)+1,x-y];
// [-x+2+y,(-x*y)-y];
// [Math.cos(y*y)*5,Math.sin(x-y)*5];
// [Math.cos(x-y),x-y];
// [(x*x)-y,x-y];
// [(y*x)-(y*y*.2),(y*x)-(x*x*.5)];

// Depricated JS code for approximate paths (Rugne-Katta method)

// let trajectoryx=[-5,-1,1,2,0.5,.5,5,5, -3, -4, 5.5];//set initial conditions
// let trajectoryy=[5,5,3,3,0.5,0,-5,5, -3, -1, -4];//set initial conditions
// let oldVec = [];
// let newVec = [];
// for (var j = 0; j < trajectoryx.length; j++) {
//   oldVec=[trajectoryx[j], trajectoryy[j]];
//   for (var i = 0; i<200; i++) {
//     let x = parseFloat(oldVec[0]);
//     let y = parseFloat(oldVec[1]);
//     newVec=getVector(x,y);
//     newVec[0]/=SCALE;
//     newVec[1]/=SCALE;
//     newVec[0]+=x;
//     newVec[1]+=y;
//     console.log(oldVec);
//     console.log(newVec);
//     line(oldVec,newVec,ctx, "red");
//     oldVec=newVec;
//   }
// }
