const words: string[] = [
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
  
  const wordHTML = document.getElementById("word");
  const wrongLettersHTML = document.getElementById("wrongLetters");
  const bodyPartHTML = document.querySelectorAll(".body-part");
  const resultHTML = document.getElementById("result");
  const playAgainHTML = document.getElementById("playAgain");
  const notif = document.getElementById("notif");
  
  let randomWord: string =
    words[Math.floor(Math.random() * words.length)].toLowerCase();
  
  let correctLetters: string[] = [];
  let wrongLetters: string[] = [];
  
  let canPlay: boolean = true;
  
  console.log(randomWord)
  
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (canPlay) {
      const keyboardEvent = e as KeyboardEvent;
      if (
        keyboardEvent.key.toLowerCase() >= "a" &&
        keyboardEvent.key.toLowerCase() <= "z" &&
        keyboardEvent.key.length === 1
      ) {
        const letter = keyboardEvent.key.toLowerCase();
  
        if (randomWord.toLowerCase().includes(letter)) {
          if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            if (notif) notif.style.visibility = "hidden";
            showLetters();
          } else {
            if (notif) notif.style.visibility = "visible";
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            if (notif) notif.style.visibility = "hidden";
            wrongLettersFn();
          } else {
            if (notif) notif.style.visibility = "visible";
          }
        }
      }
    }
  });
  
  const showLetters = () => {
    if (wordHTML) {
      wordHTML.innerHTML = `${randomWord
        .split("")
        .map((letter) => {
          if (letter === " ") {
            return `<span class="letter space"></span>`;
          } else if (letter === "-") {
            return `<span class="letter">-</span>`;
          } else {
            return `<span class="letter">
              ${correctLetters.includes(letter) ? letter : ""}
              </span>`;
          }
        })
        .join(" ")}`;
  
      const wordFound: string = wordHTML.innerText.replace(/[\n]/g, "");
      if (wordFound === randomWord.replace(/ /g, "")) {
        if (resultHTML)
          resultHTML.innerHTML = "<p>Congratulation you found the word 🎉</p>";
        canPlay = false;
      }
    }
  };
  
  const wrongLettersFn = () => {
    if (wrongLettersHTML) {
      wrongLettersHTML.innerHTML = `
      ${wrongLetters
        .map((letter) => `<span class="wrongLetter">${letter}</span>`)
        .join(", ")}
      `;
  
      bodyPartHTML.forEach((bodyPart: any, i: number) => {
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
          resultHTML.innerHTML = `<p>Sorry you lost 👎🏽 The word was : ${randomWord}</p>`;
      }
    }
  };
  
  if (playAgainHTML)
    playAgainHTML.addEventListener("click", () => {
      canPlay = true;
  
      correctLetters = [];
      wrongLetters = [];
  
      if (resultHTML) resultHTML.innerText = "";
  
      randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  
      bodyPartHTML.forEach((bodyPart: any, i: number) => {
        bodyPart.style.visibility = "hidden";
      });
  
      showLetters();
      wrongLettersFn();
    });
  
  showLetters();
  