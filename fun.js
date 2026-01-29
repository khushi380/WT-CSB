// (function show(){
//     console.log("Welcome to CS4B");
// })();  //imidiately invoke function expression (IIFE)

// const show=()=>{
//     console.log("Welcome to CSB");
// }

// const aa=() => {
//     console.log("Welcome to CSB");
// };
// aa();

function person(){
    this.age = 25;

    setTimeout( ()=> {
        console.log(this.age);
    },1000);
}
person();