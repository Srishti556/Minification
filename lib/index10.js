let leng = $("input[type=radio]").length;
let checked = $("input[type=radio]:checked");
let countYes = 0;
let countNo = 0;
function radiocheck(){
    for(i=0;i<leng;i++){
        if($(checked[i]).val() == "option1")
        {
           countYes = countYes + 1;
        }
        else if($(checked[i]).val() == "option2")
        {
           countNo = countNo + 1;
        }
    }
    return "Count-No = " + countNo + " and Count-Yes = " + countYes;
}
radiocheck();

