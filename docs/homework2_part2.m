

syms dxdt;
syms x;
syms dydt;
syms y;

fun1=(x^2)-y;
fun2=x-y;

eqn1a=fun1==dxdt;%%this is our equation for x
eqn2a=fun2==dydt;%%this is our equation for y

eqn1b=dxdt==0;%%so we can solve for fixed points
eqn2b=dydt==0;%%so we can solve for fixed points
gensol=solve(eqn1a,eqn1b,eqn2a,eqn2b);
jac=jacobian([fun1,fun2],[x,y]);

%%The first fixed point (0,0) is metastable
%%while the second fixed point (1,1) is stable.

stability(1)=1;
stability(2)=2;

nullclinex=solve(fun1==0);
nullcliney=solve(fun2==0);
clear stability

clear arroworiginy
clear arroworiginx
clear arrowgox
clear arrowgoy
for i=-6:6
    for j=-6:6
        arroworiginy(i+7,j+7)=j;
        arroworiginx(i+7,j+7)=i;
        sol=solve([eqn1a,x==i,y==j]);
        arrowgox(i+7,j+7)=sol.dxdt;
        sol=solve([eqn2a,x==i,y==j]);
        arrowgoy(i+7,j+7)=sol.dydt;
    end
end

hold off
scatter(gensol.x(1),gensol.y(1),'g')
hold on
scatter(gensol.x(2),gensol.y(2),'r')
legend('Metastable fixed points','Unstable fixed points')
ezplot(x==nullcliney);
ezplot(x==nullclinex(1));
ezplot(x==nullclinex(2));

trajectoryx=[-5,-1,1,2,0.5,.5];%%set initial conditions
trajectoryy=[5,5,3,3,0.5,0];%%set initial conditions
%%Runge-Kutta method; approximate trajectory by flowing down
for j=1:length(trajectoryx)
    for i=2:20
        sol=solve([eqn1a,x==trajectoryx(i-1,j),y==trajectoryy(i-1,j)]);
        trajectoryx(i,j)=sol.dxdt*.1+trajectoryx(i-1,j);
        sol=solve([eqn2a,x==trajectoryx(i-1,j),y==trajectoryy(i-1,j)]);
        trajectoryy(i,j)=sol.dydt*.1+trajectoryy(i-1,j);
    end
end

plot(trajectoryx,trajectoryy)
axis([-6, 6,-6, 6])
title('')

quiver(arroworiginx,arroworiginy,arrowgox,arrowgoy)