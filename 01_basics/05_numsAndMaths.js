// const score=400;
// console.log(score);

const num=new Number(100);
// console.log(num);
// console.log(typeof num.toString());
// console.log(num.toString().length);
// console.log(num.toFixed(2));//use this while building e-commerce website//100.00

const num2=23.45456
// console.log(num2.toPrecision(3));//returns 3 digits =>23.5 //rounded off

const hundreds=1000000;
// console.log(hundreds.toLocaleString());//with commas
// console.log(hundreds.toLocaleString('en-IN'));//for Indian standards

//+++++++++++++++++++++++++++++Maths+++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-99));
// console.log(Math.round(6.1));//6
// console.log(Math.ceil(6.1));//7 upper value
// console.log(Math.floor(6.9));//6 upper value

// console.log(Math.min(61,-9,4,78));
// console.log(Math.max(61,-9,4,78));

console.log(Math.random());//always b/w 0 and 1
console.log((Math.random()*10+1));

console.log(Math.floor(Math.random()*10+1));

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));

