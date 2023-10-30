function two(arr2){
    return arr2.filter(isEven);   
}
function isEven(arr){
    return arr%2 != 0;
}
let arr2 = [2,3,4,5,6,7,8,9];
two(arr2);