// (function show(){
//     console.log("Welcome to CS4B");
// })();  //imidiately invoke function expression (IIFE)

// const show=()=>{
//     console.log("Welcome to CSB");
// }
// show();

// const aa=() => {
//     console.log("Welcome to CSB");
// };
// aa();

function person(){
    this.age = 20;

    setTimeout(()=>{
        console.log(this.age);
    },100);
}
person();