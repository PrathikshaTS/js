const myArr=["Prathik","Tom","John","Peter"];
const arr1=["Ram","Sham","Dev"];
// myArr.push(arr1);
// console.log(myArr);//[ 'Prathik', 'Tom', 'John', 'Peter', [ 'Ram', 'Sham', 'Dev' ] ]
// //there is an array inside an array
// console.log(myArr[4][2]);//Dev

// let arr2=myArr.concat(arr1);
// console.log(arr2);

// const arr3= [2,3,4];
// let arr4=[...myArr,...arr1,...arr3];//multiple arrays
// console.log(arr4);

const newArr=[1,2,[4,5,6],7,[8,9,[10,11]]];
const resArr=newArr.flat(Infinity);
// console.log(resArr);

// console.log(Array.isArray("Prathiksha"));
// console.log(Array.from("Prathiksha"));//converts any string,objects or anything to array

const score1=10;
const score2=20;
const score3=30;
const arrRes=Array.of(score1,score2,score3);
console.log(arrRes);
