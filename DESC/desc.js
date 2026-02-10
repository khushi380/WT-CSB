// const student = {
//     name: "khushi",
//         age: 20,
//     address:{
//         city:"Meerut",
//         state:"UP"
//     }
// }

// const name = student.name;
// const age = student.age;
// console.log(name,age);

// const {name, age}=student;
// console.log(student);

// const {name: stuname= "Neha",age, address:{city } } = student;
// console.log(stuname,age,city);

// function displaystu({name,age}){
//     console.log(`My name is ${name} and age is ${object.age}`);
// }
// displaystu(student);

// let numbers = [10,20,30];
// let [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let data = [1,2];
// let [a = 10, b=20]=data;
// console.log(a);
// console.log(b);

let colors = ["red", "green", "blue"];
let[,second] = colors;
console.log(second);