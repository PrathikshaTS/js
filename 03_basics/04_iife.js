//Immediately invoked function expressions
//to remove pollution from global scope
//()()

//named iife
(function myFunc(){
    console.log("DB connected");
    
})();//important to put ; if there is more than one iife

( ()=>{
    console.log('DB connected two')
} )();

( (name)=>{
    console.log(name)
} )('Sammy')