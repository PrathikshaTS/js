//singleton

//object literals-no sinleton is made
const mySym=Symbol("key1");//important
const user={
    name:"Tom",
    "full name":"Tom Man",
    [mySym]:"myKey1",//important
    id:123,
    age:19,
    email:"tom@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","wednesday"]
}
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"]);//user.full name not possible
// console.log(user[mySym]);


// user.email="123@google.com";
// Object.freeze(user);//fixes user :no changes can be done
// user.email="tom@gmail.com";
// console.log(user);

user.greeting=function(){
    console.log("Hi Hello");
    
}

console.log(user.greeting);
console.log(user.greeting());

user.greeting2=function(){
    console.log(`hello ${this.name}`);
    
}
console.log(user.greeting2());
