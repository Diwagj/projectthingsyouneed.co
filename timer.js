let display = document.getElementById('display');
let timer = null;
let timeInput = document.getElementById('countdown');
let seconds = 0; 
let minutes = 0; 

function countdown() {
    seconds--;
    if (seconds === -1) {
        seconds = 59;
        minutes--;
    }
    if (minutes === 0 && seconds === 0) {
        timerStop();
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = m + ":" + s; 
}

function timerStart() {
    let inputValue = parseInt(timeInput.value);
    if (isNaN(inputValue)) {
        display.innerHTML = "Please Enter a Number";
    } else {
        minutes = inputValue; // Get the value from the input field
        seconds = 0; // Reset seconds to 0
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(countdown, 1000);
    }
}

function timerStop() {
    clearInterval(timer);
}

function timerReset() {
    location.reload();
}
