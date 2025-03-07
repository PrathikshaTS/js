const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach((b)=>{
    b.addEventListener('click',function(e){
        if(e.target.id=='grey'){
            body.style.backgroundColor='#827E8B';
        }else if(e.target.id=='azure'){
            body.style.backgroundColor='#EDF7F6';
        }else if(e.target.id=='black'){
            body.style.backgroundColor='#322D39';
        }else{
            body.style.backgroundColor='#230905';
        }
    })
});