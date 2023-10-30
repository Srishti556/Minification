let control = Array.from($("input:text.form-control"));
let arr = [];
function arrID(){
control.forEach(getid);
    return arr;
}
function getid(control) {
  return arr.push(control.id);
}
console.log(arrID());