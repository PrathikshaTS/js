// const promise1=new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve();
//     },2000)
// });

// promise1.then(function(){
//     console.log('Promise consumed');
// })

// const promise2=new Promise(function(resolve,reject){

//     setTimeout(function(){


//         resolve({user:"chai",email:"chai@example.com"});
//     },1000)
// })
// promise2.then(function (user) {
//     console.log(user);
    
// })

promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
         let err=false//true;
        if(!err)resolve({username:"chai",email:"chai@example.com"})
        else{
            reject('ERROR....Something went wrong!');
        }
    },1000)
})
promise3.then(function(user){
    console.log(user);
    return user.username;
}).then(function(name){
    console.log(name);
    
}).catch(function(err){
    console.log(err);
    
}).finally(()=>console.log("finally")
,3000)
