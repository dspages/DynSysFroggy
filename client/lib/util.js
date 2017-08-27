export const SCALE = 50.0;
var algebra = require("algebra.js");

export function getVector(x,y, exprx, expry){
  var dxdt = new algebra.Expression("x");
  dxdt = dxdt.multiply("x");
  dxdt = dxdt.subtract("y");
  var dydt = new algebra.Expression("x");
  dydt = dydt.subtract("y");
  dxdt=algebra.parse(exprx);
  dydt=algebra.parse(expry);
  return [dxdt.eval({x: x, y: y}), dydt.eval({x: x, y: y})];
}

export function line(from, to, ctx, color="black") {
  ctx.beginPath();
  ctx.moveTo((from[0]+6)*SCALE,(from[1]+6)*SCALE);
  ctx.lineTo((to[0]+6)*SCALE,(to[1]+6)*SCALE);
  ctx.strokeStyle=color;
  ctx.stroke();
}
