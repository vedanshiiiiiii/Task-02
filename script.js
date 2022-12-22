function clearScr(){
    document.getElementById('input').value="0";
}

function calculator(x){
    document.getElementById('input').value+=x;
}

function calculate(){
    var a = document.getElementById('input').value;
    var b = eval(a);
    document.getElementById('input').value = b;
}
