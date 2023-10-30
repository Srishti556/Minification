function assignIds() {
    let controls = $("input,select,textarea");
    for (i = 0; i < controls.length; i++) {
      let control = controls[i];
      let randomInt = Random();
   control.id = randomInt + "_control";
    }
   }
function Random() {
    return Math.floor(Math.random() * 10000) + 1;
}
assignIds();

//else

let cont = $("input,select,textarea");
let arr6 = [];
function six(){
    while(arr6.length<cont.length){
        let dice = Math.floor(Math.random()*cont.length + 1);  
        let val = arr6.every(equal);
        if(val == true)
        {
            arr6.push(dice);        
        }
        function equal(element){
            return element !== dice;
        }  
}
    return arr6;
}
console.log(six());
function assignId(){
    for (i = 0; i < cont.length; i++) {
        let control = cont[i];
        control.id = arr6[i] + "_control";
      }
}