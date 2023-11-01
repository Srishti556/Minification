let tooObject = {};
let arr3 = [2,3,4,5,6,7,8];
let arrObj = []
function three(arr3){
    return arr3.map(toObj);
}
function toObj(arr3){
    tooObject = {Number: arr3,
        IsEven: isEven(arr3)};
    return arrObj.push(tooObject);
}
function isEven(arr3){
    return arr3%2 == 0;
}  
three(arr3);
console.log(arrObj);