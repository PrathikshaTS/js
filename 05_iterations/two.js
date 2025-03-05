//for of
const arr=[1,2,3,4,5]
// for (const ele of arr) {
//     console.log(ele);
    
// }
const msg="Hello World!"
for (const ele of msg) {
    // console.log(ele);
    
}

//MAPs
const map=new Map();
map.set('IN','India');
map.set('USA','United States of America');
map.set('Fr','France');
console.log(map);
for (const [key,val] of map) {
    console.log(key,':-',val);
    
}


