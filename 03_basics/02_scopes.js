if(true){
    let a=1;
    const b=2;
    var c=3;
}
// console.log(a);//not accessible
// console.log(b);//not accessible
// console.log(c);//3

var d=80
if(true){
    let a=1;
    const b=2;
    var d=30;
}
// console.log(d);//30

//block scope->within {}
//global scope->outside {}

function one(){
    const name="Prathik";
    function two(){
        const website="chatgpt.com";
        console.log(name);
        
    }
    // console.log(website);//not accessible
    two();
}
one();

//++++++++++++++++interesting++++++++++++++++++
callme();//valid
function callme(){
    console.log("hello");
    
}

// myFunc(5);//not accessilbe
const myFunc=function(num){
    return num+1;
}


