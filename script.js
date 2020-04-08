const varkyan = document.querySelector(".arrow1");
const rope = document.querySelector(".arrow2");
const jam = document.querySelector(".arrow3");
const clocknumber = document.querySelector(".clocknumber");

const now = new Date();

let v = now.getSeconds(),
    r = now.getMinutes(),
    j = now.getHours();

setInterval(function () {
    clocknumber.innerHTML = j + ":" + r + ":" + v;
    varkyan.style.transform = "rotate(" + v * 6 + "deg)";
    v++;
    if (v == 60) {
        r++;
        v = 0;
    }
    rope.style.transform = "rotate(" + r * 6 + "deg)";
    if (r == 60) {
        j++;
        r = 0;
    }
    jam.style.transform = "rotate(" + j * 30 + "deg)";
    if (j == 24) {
        j++;
        j = 0;
    }
}, 1000);