// const r1 = require("readline").createInterface({   //"readline- module"
//     input: process.stdin,    //key value pair
//     output: process.stdout,   //object
// });

// r1.question("Enter something: ",
// (answer)=>{        //callback
//     console.log("You entered:", answer);
//     r1.close();
// });


//Question
function cal(){
    return{
        add: (a,b)=>a+b,
        sub: (a,b)=>a-b,
        mul: (a,b)=>a*b,
        div: (a,b)=>(b===0?"Error occure": a/b),
    };
}

console.log(cal().add(3,4));
console.log(cal().sub(3,4));
console.log(cal().mul(3,4));
console.log(cal().div(3,0));


//Q2
const cal=()=> ({
    const calc = (op,a,b)=>{
        
    }
})