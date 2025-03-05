const arr=["Sammy","Tommy","Johny","Tony"];
arr.forEach( function (ele){
    // console.log(ele);
    
})

arr.forEach( (val)=>{
    //console.log(val);
    
})

function printme(item){
    console.log(item);
    
}
//arr.forEach(printme)

arr.forEach((ele,idx,arr1)=>{
    // console.log(ele,idx,arr1);
    
})

//array of objects
const files=[
    {
        language:"java",
        fileName:"java"
    },
    {
        language:"C++",
        fileName:"cpp"
    },
    {
        language:"python",
        fileName:"py"
    },
]
files.forEach(function(item){
    console.log(item.fileName);
    
})