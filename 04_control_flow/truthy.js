const email="sammy@gmail.com";
if(email){
    console.log("Got email");
    
}else{
    console.log("didn't get email");
    
}
//"somestring" is assumed true
//"" is assumed false

//falsy values
//null,NaN,undefined,"",false,0,-0,bigint 0n

//truthy values
// true,[],"0",'false'," ",{},function(){}

//how to check is an object is empty or not
const myObj={};
if(Object.keys(myObj).length==0)console.log("Empty object");


// nullish coalescing operator(??): null undefined
let val;
// val=5 ?? 10
// val=null ?? 11
// val=undefined ?? 8
val=null ?? 45 ??3
console.log(val);

//ternary operator
const price =100;
price>=100?console.log("ok"):console.log("Expensive");
