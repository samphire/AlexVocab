var soundsNo = ['no', 'nooo', 'notright', 'notquiteright', 'kidding'];
var soundsYes = ['goodjob', 'ohyeah', 'ugotit', 'welldone', 'yes'];
var hurryup = ['comeon', 'hurryup', 'waitingfor', 'yawn'];
var wordlist = ['lamp', 'guitar', 'rug', 'clock', 'pictures', 'window', 'pillows', 'blanket', 'football']

var timer;
var hurrytimer;
var currentItemName;
var currentIndex = 0;
var audio;

document.onload = function () {
    audio = document.getElementById('bob');
}

function playSprite(name) {
    const bob = "audio/" + name + ".wav";
    document.getElementById("bob").src = bob;
    document.getElementById("bob").play();
}

function doNext() {
    currentItemName = wordlist[currentIndex];
    console.log(currentIndex + ": " + currentItemName);
    if (currentIndex == wordlist.length) {
        alert('the end');
    }
    playSprite(wordlist[currentIndex]);
}

function check(name) {
    console.log('in check');
    if (name == currentItemName) {
        playSprite(soundsYes[Math.floor(Math.random() * soundsYes.length)]);
        currentIndex++;
        setTimeout(doNext, 1500);

    } else {
        playSprite(soundsNo[Math.floor(Math.random() * soundsNo.length)]);
        setTimeout(function () {
            playSprite(currentItemName);
        }, 1500);
    }
}

function setTimer() {
    clearInterval(hurrytimer);
    hurrytimer = setInterval(hurry, 9000);

    function hurry() {
        playSprite('comeon');
    }
}