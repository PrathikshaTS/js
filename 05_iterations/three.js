//for in->returns key
const myObj={
    js:"javascript",
    py:"python",
    cpp:"C++"
}
for (const key in myObj) {
    console.log(key,':',myObj[key]);
    
}
const heroes=["shaktiman","spiderman","ironman"];
for (const key in heroes) {
    console.log(heroes[key]);
    
}