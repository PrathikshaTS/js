const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const start=document.getElementById('start');
const stop=document.getElementById('stop');
let ref;

start.addEventListener('click',function(e){
    ref=setInterval(function(){
        document.querySelector('body').style.background=randomColor();
    },1000);
})
stop.addEventListener('click',function(e){
    clearInterval(ref);
})