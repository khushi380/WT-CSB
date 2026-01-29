// "use strict"
// console.log("first");


// var a=10;
// let a = 20;
// console.log(window);

// var a = 10;
// var a = 20;
// console.log(a);

// console.log(b);
// var b = 20;

// function hello(){
//     if(true){
//         var x = 10; //function scope
//         console.log(x);
//     }
//     console.log(x);
// }
// hello();

// console.log(z);
// var z=20;

// function hello(){
//     if(true){
//         let x = 10; //function scope
//         console.log("Inner",x);
//     }
//     console.log("Outer",x);
// }
// hello();

// console.log(z);
// let z=20;

function hello(){
    if(true){
        const x = 10; //function scope
        console.log(x);
    }
    console.log(x);
}
hello();

console.log(z);
var z=20;

//Array elements can be modified, but the array itself cannot be reassigned in const