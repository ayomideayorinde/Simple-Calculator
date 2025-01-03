function btnClick(val){
    var v = document.getElementById('display');
    v.value += val;
}
function clearDisplay(val){
    var cd = document.getElementById('display');
    cd.value = "";
}
function back(){
    var backspace = document.getElementById('display');
    backspace.value = backspace.value.slice(0,-1);
}
function equal(){
    var firstNum = document.getElementById('display').value;
    try{
        var secondNum = eval(firstNum);
        document.getElementById('display').value = secondNum;
    }
    catch{
        document.getElementById('display').value = 'Error';
    }
}