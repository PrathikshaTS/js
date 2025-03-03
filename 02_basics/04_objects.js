//singleton objects is created using constructor


const user=new Object();
user.name="Sammy";
user.id="abc139";
user.age=19;
user.isLoggedIn=false;
// console.log(user);

//object ke ander objects
const regularUser={
    email:"sammy@google.com",
    userfullname:{
        fullname:{
            firstName:"Sammy",
            lastName:"Man"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.userfullname);
// console.log(regularUser.userfullname.fullname);
// console.log(regularUser.userfullname.fullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}//spread operator
// console.log(obj3);

//there can be objects in arrays

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isLogged'));

const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor:instructor}=course;
// console.log(instructor);

//JSON
// {
//     "name":"Prathik",
//     "course":"js in hindi",
//     "age":19
// }

[
    {},
    {},
    {}
]



