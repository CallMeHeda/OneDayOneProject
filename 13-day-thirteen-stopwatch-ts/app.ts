const clock = document.getElementById("clock") as HTMLElement;
const start = document.getElementById("btn-start") as HTMLElement;
const pause = document.getElementById("btn-pause") as HTMLElement;
const reset = document.getElementById("btn-reset") as HTMLElement;

let [seconds, minutes, hours] = [0, 0, 0];
let interval: number;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  clock.innerHTML = `${h} : ${m} : ${s}`;
}

if (start)
  start.addEventListener("click", () => {
    if (interval !== null) {
      clearInterval(interval);
    }
    interval = setInterval(stopwatch, 10);
  });

if (pause)
  pause.addEventListener("click", () => {
    clearInterval(interval);
  });

if (reset)
  reset.addEventListener("click", () => {
    clearInterval(interval);
    [seconds, minutes, hours] = [0, 0, 0];
    clock.innerHTML = "00 : 00 : 00";
  });
