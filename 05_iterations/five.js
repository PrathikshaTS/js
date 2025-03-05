//foreach doesnot return any value

const arr=[1,2,3,4,5,6,7,8,9,10];
const res1=arr.filter((num)=>num>5)
console.log(res1);
//(or)
const res=[];
arr.forEach((ele)=>{
    if(ele>5)res.push(ele)
})
console.log(res);
