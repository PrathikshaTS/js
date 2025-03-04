function myFunc(){
    console.log("Hello world");
}
// myFunc//function reference
// myFunc();//execute

function add(num1,num2){
    return num1+num2;
}
const res=add(10,23);
// console.log("Result:",res);

function loginUserMsg(username){
    return `${username} just logged in`;
}
// console.log(loginUserMsg("Prathik"));//Prathik just logged in
// console.log(loginUserMsg(""));// just logged in
// console.log(loginUserMsg());// undefined just logged in

function loginUserMsg2(username){
    if(username===undefined){//or (!username)
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMsg2("Prathik"));//Prathik just logged in
// console.log(loginUserMsg2(""));// just logged in
// console.log(loginUserMsg2());//Please enter a user name

function loginUserMsg3(username="user"){
    return `${username} just logged in`;
}
// console.log(loginUserMsg3("Prathik"));//Prathik just logged in
// console.log(loginUserMsg3());//user just logged in
// console.log(loginUserMsg3(""));


//use while making e commerce website
function calculatCartPrice(...num){//here ... is rest operator
    return num;//returns an array
}
// console.log(calculatCartPrice(200,56,459));

//functions with objects
const user={
    name:"Prathik",
    price:499
}
function handleObj(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObj(user);

// handleObj({
//     name:"Sammy",
//     price:589
// })

const arr=[399,599,99,999];
function returnSecondVal(getArr){
    return getArr[2];
}
console.log(returnSecondVal(arr));
console.log(returnSecondVal([45,89,7999]));

