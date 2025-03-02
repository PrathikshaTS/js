const d=new Date();
// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(typeof d);//object

// const myDate=new Date(2005, 9, 6);//in js month starts from 0
// console.log(myDate.toLocaleString());

// const myDate=new Date(2025,9,6,7,30);
// console.log(myDate.toLocaleString());

const myDate=new Date("06-10-2005");
// console.log(myDate.toLocaleString());


let myTimeStamp=Date.now();
//in millisec
// console.log(myTimeStamp);
// console.log(myDate.getTime());

//in seconds
console.log(Math.floor(Date.now()/1000));
