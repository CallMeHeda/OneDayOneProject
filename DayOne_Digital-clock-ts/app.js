var showDate = function () {
    var date = new Date(Date.now());
    return date.toLocaleTimeString();
};
setInterval(function () {
    var clock = document.getElementById("clock");
    if (clock) {
        clock.textContent = showDate();
    }
}, 1000);
