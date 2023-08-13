function allClr(){
    document.getElementById("result").value = '';
}
function back(){
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, result.length - 1);
}
function display(value){
    document.getElementById("result").value += value;
}
function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}