"use strict";

const watchElement = document.querySelector('.watch');
const startBtn = document.getElementById("startWatch");
const pauseBtn = document.getElementById("pauseWatch");
const resetBtn = document.getElementById("resetWatch");
let secondCount = 0;
let stopWatch;
      
// Pad zero to single digits
function zeroPaddingNum(num){
    return (num < 10) ? "0" + num : num;
}
      
// Calculate the time and display the watch
function displayWatch(){
    let hour, minute, second;

    second = secondCount % 60;
    minute = Math.floor(secondCount/60) % 60;
    hour = Math.floor(secondCount/3600);

    watchElement.textContent = zeroPaddingNum(hour) + ":" + zeroPaddingNum(minute) + ":" + zeroPaddingNum(second);
    // Add one second everytime this function is called
    secondCount++;
}
      
// When start button is clicked, execute displayWatch() once per second 
// , hide start button, show pause button, show reset button and remove blinking text effect
startBtn.addEventListener("click", () => {
    stopWatch = setInterval(displayWatch, 1000);
    startBtn.classList.add("btn_hide");
    pauseBtn.classList.remove("btn_hide");
    resetBtn.classList.remove("btn_vis_hide");
    watchElement.classList.remove("blinking");
});

// When pause button is clicked, clear stopWatch interval
// , show start button, hide pause button and add blinking text effect
pauseBtn.addEventListener("click", () => {
    clearInterval(stopWatch);
    startBtn.classList.remove("btn_hide");
    pauseBtn.classList.add("btn_hide");
    watchElement.classList.add("blinking");
});

// When reset button is clicked, clear stopWatch interval, 
// , set secondCount to zero, update the stopwatch on screen, 
// , show start button, hide pause button, hide reset button and remove blinking text effect
resetBtn.addEventListener("click", () => {
    clearInterval(stopWatch);
    secondCount = 0;
    displayWatch();
    startBtn.classList.remove("btn_hide");
    pauseBtn.classList.add("btn_hide");
    resetBtn.classList.add("btn_vis_hide");
    watchElement.classList.remove("blinking");
});

displayWatch();