let control = $("input,select,textarea")
function countControls() {
    let controlCount = 0;
    $("input,select,textarea").each(function(){
        controlCount++;
    }) ;  
    return controlCount;
   }

countControls();


// alternate


function count(){
   return $("input,select,textarea").length;
}
count();