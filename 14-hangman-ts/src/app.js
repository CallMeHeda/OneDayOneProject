var words = [
    "Apple",
    "Banana",
    "Cat",
    "Dog",
    "Elephant",
    "Fish",
    "Grape",
    "Happy",
    "Ice Cream",
    "Jump",
    "Kite",
    "Lemon",
    "Monkey",
    "Nice",
    "Orange",
    "Penguin",
    "Queen",
    "Rabbit",
    "Sun",
    "Tiger",
    "Umbrella",
    "Violin",
    "Watermelon",
    "Xylophone",
    "Yellow",
    "Zebra",
    "Ball",
    "Car",
    "Drum",
    "Elephant",
    "Flower",
    "Garden",
    "Hat",
    "Ice",
    "Jellyfish",
    "Kite",
    "Lemon",
    "Moon",
    "Nest",
    "Ocean",
    "Pear",
    "Quail",
    "Rainbow",
    "Snake",
    "Tree",
    "Unicorn",
    "Volcano",
    "Water",
    "X-ray",
    "Yogurt",
    "Zucchini",
    "Airplane",
    "Boat",
    "Cloud",
    "Dolphin",
    "Elephant",
    "Fire",
    "Guitar",
    "Horse",
    "Island",
    "Juice",
    "Kangaroo",
    "Lighthouse",
    "Mountain",
    "Nectar",
    "Octopus",
    "Pizza",
    "Quilt",
    "Rainbow",
    "Star",
    "Tiger",
    "Unicorn",
    "Valley",
    "Waterfall",
    "Xylophone",
    "Yoga",
    "Zebra",
    "Ant",
    "Bear",
    "Cake",
    "Duck",
    "Egg",
    "Frog",
    "Giraffe",
    "Honey",
    "Ice Cream",
    "Jellyfish",
    "Koala",
    "Lion",
    "Mouse",
    "Nut",
    "Octopus",
    "Penguin",
    "Queen",
    "Rabbit",
    "Snake",
    "Tiger",
    "Unicorn",
    "Volcano",
    "Whale",
];
var wordHTML = document.getElementById("word");
var wrongLettersHTML = document.getElementById("wrongLetters");
var bodyPartHTML = document.querySelectorAll(".body-part");
var resultHTML = document.getElementById("result");
var playAgainHTML = document.getElementById("playAgain");
var notif = document.getElementById("notif");
var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
var correctLetters = [];
var wrongLetters = [];
var canPlay = true;
console.log(randomWord);
window.addEventListener("keydown", function (e) {
    if (canPlay) {
        var keyboardEvent = e;
        if (keyboardEvent.key.toLowerCase() >= "a" &&
            keyboardEvent.key.toLowerCase() <= "z" &&
            keyboardEvent.key.length === 1) {
            var letter = keyboardEvent.key.toLowerCase();
            if (randomWord.toLowerCase().includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter);
                    if (notif)
                        notif.style.visibility = "hidden";
                    showLetters();
                }
                else {
                    if (notif)
                        notif.style.visibility = "visible";
                }
            }
            else {
                if (!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);
                    if (notif)
                        notif.style.visibility = "hidden";
                    wrongLettersFn();
                }
                else {
                    if (notif)
                        notif.style.visibility = "visible";
                }
            }
        }
    }
});
var showLetters = function () {
    if (wordHTML) {
        wordHTML.innerHTML = "".concat(randomWord
            .split("")
            .map(function (letter) {
            if (letter === " ") {
                return "<span class=\"letter space\"></span>";
            }
            else if (letter === "-") {
                return "<span class=\"letter\">-</span>";
            }
            else {
                return "<span class=\"letter\">\n              ".concat(correctLetters.includes(letter) ? letter : "", "\n              </span>");
            }
        })
            .join(" "));
        var wordFound = wordHTML.innerText.replace(/[\n]/g, "");
        if (wordFound === randomWord.replace(/ /g, "")) {
            if (resultHTML)
                resultHTML.innerHTML = "<p>Congratulation you found the word 🎉</p>";
            canPlay = false;
        }
    }
};
var wrongLettersFn = function () {
    if (wrongLettersHTML) {
        wrongLettersHTML.innerHTML = "\n      ".concat(wrongLetters
            .map(function (letter) { return "<span class=\"wrongLetter\">".concat(letter, "</span>"); })
            .join(", "), "\n      ");
        bodyPartHTML.forEach(function (bodyPart, i) {
            if (wrongLetters.length > 0 && i === 0) {
                bodyPart.style.visibility = "visible";
            }
            if (wrongLetters.length > 1 && i === 1) {
                bodyPart.style.visibility = "visible";
            }
            if (wrongLetters.length > 2 && i === 2) {
                bodyPart.style.visibility = "visible";
            }
            if (wrongLetters.length > 3 && i === 3) {
                bodyPart.style.visibility = "visible";
            }
            if (wrongLetters.length > 4 && i === 4) {
                bodyPart.style.visibility = "visible";
            }
            if (wrongLetters.length > 5 && i === 5) {
                bodyPart.style.visibility = "visible";
            }
        });
        if (wrongLetters.length === bodyPartHTML.length) {
            canPlay = false;
            if (resultHTML)
                resultHTML.innerHTML = "<p>Sorry you lost \uD83D\uDC4E\uD83C\uDFFD The word was : ".concat(randomWord, "</p>");
        }
    }
};
if (playAgainHTML)
    playAgainHTML.addEventListener("click", function () {
        canPlay = true;
        correctLetters = [];
        wrongLetters = [];
        if (resultHTML)
            resultHTML.innerText = "";
        randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        bodyPartHTML.forEach(function (bodyPart, i) {
            bodyPart.style.visibility = "hidden";
        });
        showLetters();
        wrongLettersFn();
    });
showLetters();
