const user={
    name:"Prathik",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.name},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg();
// user.name="Sammy";
// user.welcomeMsg();

// console.log(this);

//in browser the global object is window

function myFunc(){
    // console.log(this);
    let val="Prathik";
    //console.log(this.val);//undefined
}
myFunc()

const one= ()=>{
    console.log(this);
}
// one();

//arrow functions

// const add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(5,6));

//or
//implicit return
// const add=(num1,num2)=> num1+num2;
const add=(num1,num2)=> (num1+num2);

console.log(add(5,6));

