let timerId = null;
let totalSeconds = 0;

const heading = document.getElementById("timeRemaining");

function setAlarm() {
  let alarmSetTime = document.getElementById("alarmSet").value;
  renderTime(alarmSetTime);

  let interval = setInterval(() => {
    alarmSetTime -= 1;
    renderTime(alarmSetTime);

    if (alarmSetTime <= 0) {
      playAlarm();
      clearInterval(interval);
    }
  }, 1000);
}

function renderTime(totalSeconds) {
  const title = document.getElementById("timeRemaining");

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  title.innerText = `Time Remaining: ${mm}:${ss}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
