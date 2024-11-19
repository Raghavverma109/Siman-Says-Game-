let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btn = ["red", "yellow", "blue", "pink"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started !");
        started = true;

        levelUp();
    }
});

let gameFlash = (btn) => {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
};

let userFlash = (btn) => {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
};

let max_score = 0;
function levelUp() {
    userSeq = [];
    level++;
    //   max_score += level ;

    h2 = document.querySelector("h2");
    h2.innerHTML = `Level ${level}`;

    // Choose a random number.
    let randIndex = Math.floor(Math.random() * 4); // You need to multiply by 4, not 3, because there are 4 colors.
    let randomColor = btn[randIndex]; // Choose a random color from the btn array.
    let randomBtn = document.querySelector(`.${randomColor}`); // Get the DOM element of the random button
    // console.log("Selected color: ", randomColor);

    gameSeq.push(randomColor);
    console.log("gamesequence : ", gameSeq);
    gameFlash(randomBtn); // Pass the actual button element to gameFlash, not the color string.
}

let checkColorMatch = (index) => {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            //to check the last element comes from both the seq. is equal.
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! <b>Your score was ${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset(); //reset function : reset the values and again start the game,
    }
};

let btnPress = function () {
    let btn = this; // jo bhi button click hua ho store in btn.
    userFlash(btn); //flash the button clicked bu the user.

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log("usersequence : ", userSeq);

    checkColorMatch(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    max_score = Math.max(max_score, level);
    let disMaxScore = document.querySelector(".max_score");
    disMaxScore.innerHTML = `Max Score :  ${max_score} `;
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
