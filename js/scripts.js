const minutese1 = document.querySelector('#minutes')
const secondse1 = document.querySelector('#seconds')
const milisecondse1 = document.querySelector('#miliseconds')
const start = document.querySelector('#startBtn')
const pause = document.querySelector('#PauseBtn')
const resume = document.querySelector('#resumeBtn')
const reset = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let miliseconds = 0
let ispaused = false

start.addEventListener('click', startimer)

function startimer() {
    interval = setInterval(() => {

        if (!ispaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++
                miliseconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutese1.textContent = formatTime(minutes)
            secondse1.textContent = formatTime(seconds)
            milisecondse1.textContent = formatTime(miliseconds)
        }

    }, 1)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time
}