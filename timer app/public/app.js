let timeLeft = 0;
let timerInterval;

function startTimer() {
  timeLeft = parseInt(document.getElementById('timeInput').value) || 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    } else {
      timeLeft--;
      updateTimerDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById('timer').textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
}
