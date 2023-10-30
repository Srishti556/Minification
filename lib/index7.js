let cont = $("input,select,textarea");
let l = cont.length;
function getRandom()
{
    let arr = [];
    for(i=0;i<l;i++){
    let control = cont[i];
    let inputId = control.id;
    let random = inputId.split("_")[0];
    arr.push(random);
}
return arr;
}
console.log(getRandom());