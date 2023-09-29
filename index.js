var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 172; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }


    document.querySelector(".pbottom").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".pbottom").innerHTML = `<h2>Game Over<h2>`;
        }
    }, 1000);
}

document.querySelector(".pbottom").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makebubble();
        getnewhit();
    }
});

makebubble();
runtimer();
getnewhit();
