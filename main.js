/**
 * 
 * 
 *                              App timer
 * 
 * 
 */
const screenCountdown = document.querySelector('.showCountdown');
const startButton = document.querySelector('.showStart');
const stopButton = document.querySelector('.showStop');

let countdown = 0;
let hours = 0
let minutes = 59;
let seconds = 59;

startButton.addEventListener('click', timerStart, false);
stopButton.addEventListener('click', timerStop, false);

function timerStart(){
    countdown = setInterval(function(){
        screenCountdown.innerHTML =hours + ":" + minutes + ":" + seconds--;
        if(seconds === -1){
            seconds = 10;
            minutes--;
        }
    }, 1000);
    
}

function timerStop(){
    clearTimeout(countdown);
}