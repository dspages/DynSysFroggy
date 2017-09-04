export const api_eval = function(dxdt, dydt){
  return $.ajax({
    method: 'POST',
    url: `./api/evaluate`,
    data: {dxdt: dxdt, dydt: dydt}
  });
};
