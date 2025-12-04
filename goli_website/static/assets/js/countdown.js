// ===================== For Demo Server(Add 9 Days with current date) =====================
const daysElm = document.getElementById("days");
const hoursElm = document.getElementById("hours");
const minutesElm = document.getElementById("minutes");
const secondsElm = document.getElementById("seconds");

function updateTargetDate() {
  const now = new Date();
  now.setHours(23, 59, 59, 0);
  const targetDate = new Date("2025-12-05").getTime() + 0 * 24 * 1 * 60 * 1000;
  return targetDate;
}
function updateCountdownn() {
  const targetDate = updateTargetDate();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 1 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  daysElm.textContent = days < 10 ? "0" + days : days;
  hoursElm.textContent = hours < 10 ? "0" + hours : hours;
  minutesElm.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsElm.textContent = seconds < 10 ? "0" + seconds : seconds;
}
if(daysElm && hoursElm && minutesElm && secondsElm) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// ===================== For Demo Server(Add 9 Days with current date) =====================