// Random Number generator 

const myLabel = document.getElementById("myLabel");
const myButton1 = document.getElementById("myButton1");
const myButton2= document.getElementById("myButton2");
const myButton3= document.getElementById("myButton3");
const min = 1;
const max = 100;
let randomNum;

myButton1.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    document.getElementById("input").value = '0';
    document.getElementById("output").textContent = '';
}
myButton2.onclick = function(){
    const input = document.getElementById("input").value;
    if (isNaN(input)){
        document.getElementById("output").textContent = 'Your answer should be a number.';
    } 
    else{
        if(input > randomNum){
            document.getElementById("output").textContent = 'Your answer is too high.';
        } else if(input < randomNum){
            document.getElementById("output").textContent = 'Your answer is too low.';
        } else {
            document.getElementById("output").textContent = 'Your answer is correct!';
        }
    }
}

myButton3.onclick = function(){
    myLabel.textContent = randomNum;
}