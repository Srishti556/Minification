function one(arr){
   return arr.some(item => item%2 == 0);
}
// function isEven(arr){
//     return arr%2 == 0;
// }
let arr = [2,3,4,5];
if(one(arr)){
    console.log("Yes");
} else console.log("No");