function ID(elem){
    return document.getElementById(elem);
}

function CLASS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    document.querySelectorAll(elem);
}

var tomb = ["."]
var lepes = 0;
var gyalog = "kepek/gyalog.png";

function init(){
    
    var text = ""
    for (let index = 0; index < 64; index++){
        text += "<div class='divek'><h3 id='"+index+"'>" + tomb[index] + "</h3></div>";
    }

    ID('kockak').innerHTML = text;

    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", kattint)
    }
}

function kattint() {
    var aktIndex = (event.target.id)
    if (lepes%2==0){
        ID(aktIndex).immerHTML = gyalog;
        tomb[aktIndex] = gyalog;
    }
    else{
        ID(aktIndex).immerHTML="O";
        tomb[aktIndex] = "O";
    }
    lepes++;
    
}