// function add(...nums){     //"..."= rest operator
//     let total = 0;
//     for(let i of nums){
//         total=total+i;
//     }
//     return total;
// }
// console.log(add(2,3,4,5));

let a=[1,3,5,6,4];
let [first,sec,...last]=a;
console.log(first,sec,...last);

//spread operator
// let arr1 = [10,20,40];
// let arr2 = [...arr1];
// console.log(arr2);

// function test(...args){
//     console.log(args);
// }
// let arr=[1,2,3];   //...arr is spread
// test(...arr);

//Write an arrow function isEven that takes a number and returns "Even" or "Odd".
 const isEven = (nums)=>{
    if(nums%2===0){
        return "Even";
    }else{
        return "Odd";
    }
};
console.log(isEven(3));


//Write an arrow function reverseString(str) that returns the reversed string
const reverseString=(str)=>{
    let reversearr = "";
    for(let i=str.length-1;i>=0;i--){
         reversearr = reversearr + str[i];
    }
    return reversearr;
}
console.log(reverseString("khushi"));

//write an arrow function averageMarks to compute average marks and return "Pass" if average>= 40 else "Fail".

const averageMarks = (marks)=>{
    let sum =0;
    for(let i=0;i<marks.length;i++){
        sum=sum+marks[i];
    }
    let average = sum/marks.length;
    if(average>=40){
        return "Pass";
    }else{
        "Fail";
    }

    }
    console.log(averageMarks([50,55,60,40,80]));

    //Write an arrow function square(num) that returns the square of a number.
    const square=(num)=>{
        let square = num*num;
        return square;
    }
    console.log(square(2));

    //Write an arrow function isPositive(num) that returns "Positive" if the number is greater than 0, else "Negative"
    const isPositive=(num)=>{
        if(num>0){
            return "Positive";
        }else{
            return "Negative";
        }
    }
    console.log(isPositive(-1));

   // Write an arrow function maxOfTwo(a, b) that returns the larger number
   const maxOfTwo=(a,b)=>{
    if(a>b){
        return a;
    }else{
        return b;
    }
   }
   console.log(maxOfTwo(20,70));
