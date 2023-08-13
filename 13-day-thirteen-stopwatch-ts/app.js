var clock = document.getElementById("clock");
var start = document.getElementById("btn-start");
var pause = document.getElementById("btn-pause");
var reset = document.getElementById("btn-reset");
var _a = [0, 0, 0], seconds = _a[0], minutes = _a[1], hours = _a[2];
var interval;
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
    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    clock.innerHTML = "".concat(h, " : ").concat(m, " : ").concat(s);
}
if (start)
    start.addEventListener("click", function () {
        if (interval !== null) {
            clearInterval(interval);
        }
        interval = setInterval(stopwatch, 10);
    });
if (pause)
    pause.addEventListener("click", function () {
        clearInterval(interval);
    });
if (reset)
    reset.addEventListener("click", function () {
        var _a;
        clearInterval(interval);
        _a = [0, 0, 0], seconds = _a[0], minutes = _a[1], hours = _a[2];
        clock.innerHTML = "00 : 00 : 00";
    });
