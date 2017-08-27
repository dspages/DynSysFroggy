export const SCALE = 50.0;
export const OFFSET = 10.0;
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
  ctx.moveTo((from[0]+6)*SCALE+OFFSET,(from[1]+6)*SCALE+OFFSET);
  ctx.lineTo((to[0]+6)*SCALE+OFFSET,(to[1]+6)*SCALE+OFFSET);
  ctx.strokeStyle=color;
  ctx.stroke();
}
