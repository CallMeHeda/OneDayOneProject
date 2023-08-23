const showDate = () => {
  let date: Date = new Date(Date.now());
  return date.toLocaleTimeString();
};

setInterval(() => {
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = showDate();
  }
}, 1000);
