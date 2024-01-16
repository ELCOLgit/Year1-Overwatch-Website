//animation text title
let index = 0;
let text = "The most anticipated competitive game of 2022";
let myInterval = window.setInterval(addLetter, 65);

function addLetter(){
    document.getElementById("text").innerHTML += text[index];
    index++;
    if(index == text.length){
        window.clearInterval(myInterval);
    }
}