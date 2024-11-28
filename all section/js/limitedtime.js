let countdownTime = (15 * 24 * 60 * 60) + (6 * 60 * 60) + (12 * 60) + 17;

const countdownElement = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

function updateCountdown() {
    const days = Math.floor(countdownTime / (24 * 60 * 60));
    const hours = Math.floor((countdownTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
    const seconds = countdownTime % 60;

    countdownElement.days.innerHTML = days;
    countdownElement.hours.innerHTML = hours;
    countdownElement.minutes.innerHTML = minutes;
    countdownElement.seconds.innerHTML = seconds;

    countdownTime--;

    if (countdownTime < 0) {
        clearInterval(timer);
    }
}

const timer = setInterval(updateCountdown, 1000);