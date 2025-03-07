// const clock=document.getElementById('clock');
const clock=document.querySelector('#clock');
setInterval(function(){
    const mydate=new Date();
    clock.innerHTML=mydate.toLocaleTimeString();
},1000);
