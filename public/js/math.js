let a = 8;
let b = 5;
let c = 10;

let angleA = Math.acos((a*a- b*b- c*c)/(-2*b*c))*(180/Math.PI);
let angleB = Math.acos((b*b- a*a- c*c)/(-2*a*c))*(180/Math.PI);
let angleC = Math.acos((c*c- b*b- a*a)/(-2*b*a))*(180/Math.PI);

console.log(angleA);
console.log(angleB);
console.log(angleC);

let sum = angleA + angleB + angleC;

console.log(sum);