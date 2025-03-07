const form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();

   const ht= parseInt(document.querySelector('#height').value);
   const wt= parseInt(document.querySelector('#weight').value);
   const res=document.querySelector("#results");

   if(ht==''||ht<0||isNaN(ht)){
     res.innerHTML="Please enter a valid height!"
   }else if(wt==''||wt<0||isNaN(wt)){
    res.innerHTML="Please enter a valid weight!"
   }else{
        const bmi=(wt/((ht*ht)/10000)).toFixed(2);
        res.innerHTML=`<span>${bmi}</span>`
   }

})