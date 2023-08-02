const createButton = (text: string, onClick: () => void) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", onClick);
  button.classList.add(
    "bg-slate-600",
    "hover:bg-slate-800",
    "text-white",
    "font-semibold",
    "text-lg",
    "rounded",
    "px-4",
    "py-2",
    "w-screen",
    "text-center",
    "2xl:py-4",
    "2xl:font-bold",
    "2xl:text-xl"
  );

  if (button.textContent === "=") {
    button.classList.add("h-full", "bg-rose-600", "hover:bg-rose-500");
  }

  if (
    button.textContent === "+" ||
    button.textContent === "-" ||
    button.textContent === "DEL" ||
    button.textContent === "X" ||
    button.textContent === "/" ||
    button.textContent === "C"
  ) {
    button.classList.add("bg-slate-800", "hover:bg-gray-600");
  }

  return button;
};

const createCalculator = () => {
  let basicValue: string = "";
  let finalValue: string = "";

  const textField = document.createElement("textarea");
  textField.setAttribute("type", "text");
  textField.setAttribute("readonly", "true");
  textField.classList.add(
    "flex",
    "bg-gray-900",
    "pt-12",
    "pb-2",
    "px-4",
    "rounded-t",
    "focus:outline-none",
    "w-full",
    "2xl:w-1/2",
    "font-bold",
    "text-2xl",
    "resize-none",
    "text-white"
  );

  const buttonGrid = document.createElement("div");
  buttonGrid.classList.add("grid", "grid-cols-4", "gap-1", "2xl:w-3/6");

  // ROW 1
  const buttonReset = createButton("C", () => {
    basicValue = "";
    finalValue = "";
    textField.value = basicValue;
  });
  const buttonDivide = createButton("/", () => {
    if (finalValue != "") {
      basicValue = "";
      basicValue += finalValue;
    }
    basicValue += "/";
    textField.value = basicValue;
  });
  const buttonMult = createButton("X", () => {
    if (finalValue != "") {
      basicValue = "";
      basicValue += finalValue;
    }
    basicValue += "*";
    textField.value = basicValue;
  });
  const buttonDel = createButton("DEL", () => {
    basicValue = basicValue.toString().slice(0, -1);
    textField.value = basicValue;
  });
  buttonGrid.appendChild(createButtonDiv(buttonReset));
  buttonGrid.appendChild(createButtonDiv(buttonDivide));
  buttonGrid.appendChild(createButtonDiv(buttonMult));
  buttonGrid.appendChild(createButtonDiv(buttonDel));

  // ROW 2
  const button7 = createButton("7", () => {
    basicValue += "7";
    textField.value = basicValue;
  });
  const button8 = createButton("8", () => {
    basicValue += "8";
    textField.value = basicValue;
  });
  const button9 = createButton("9", () => {
    basicValue += "9";
    textField.value = basicValue;
  });
  const buttonMinus = createButton("-", () => {
    if (finalValue != "") {
      basicValue = "";
      basicValue += finalValue;
    }
    basicValue += "-";
    textField.value = basicValue;
  });
  buttonGrid.appendChild(createButtonDiv(button7));
  buttonGrid.appendChild(createButtonDiv(button8));
  buttonGrid.appendChild(createButtonDiv(button9));
  buttonGrid.appendChild(createButtonDiv(buttonMinus));

  // ROW 3
  const button4 = createButton("4", () => {
    basicValue += "4";
    textField.value = basicValue;
  });
  const button5 = createButton("5", () => {
    basicValue += "5";
    textField.value = basicValue;
  });
  const button6 = createButton("6", () => {
    basicValue += "6";
    textField.value = basicValue;
  });
  const buttonPlus = createButton("+", () => {
    if (finalValue != "") {
      basicValue = "";
      basicValue += finalValue;
    }
    basicValue += "+";
    textField.value = basicValue;
  });
  buttonGrid.appendChild(createButtonDiv(button4));
  buttonGrid.appendChild(createButtonDiv(button5));
  buttonGrid.appendChild(createButtonDiv(button6));
  buttonGrid.appendChild(createButtonDiv(buttonPlus));

  // ROW 4
  const button1 = createButton("1", () => {
    basicValue += "1";
    textField.value = basicValue;
  });
  const button2 = createButton("2", () => {
    basicValue += "2";
    textField.value = basicValue;
  });
  const button3 = createButton("3", () => {
    basicValue += "3";
    textField.value = basicValue;
  });
  const buttonEqual = createButton("=", () => {
    finalValue = eval(basicValue);
    textField.value = finalValue;
    console.log(finalValue + " " + basicValue);
  });
  buttonGrid.appendChild(createButtonDiv(button1));
  buttonGrid.appendChild(createButtonDiv(button2));
  buttonGrid.appendChild(createButtonDiv(button3));
  buttonGrid.appendChild(createButtonDiv(buttonEqual));

  // ROW 5
  const buttonPercent = createButton("%", () => {
    if (finalValue != "") {
      basicValue = "";
      basicValue += finalValue;
    }
    basicValue += "%";
    textField.value = basicValue;
  });
  const button0 = createButton("0", () => {
    basicValue += "0";
    textField.value = basicValue;
  });
  const buttonPoint = createButton(".", () => {
    basicValue += ".";
    textField.value = basicValue;
  });
  buttonGrid.appendChild(createButtonDiv(buttonPercent));
  buttonGrid.appendChild(createButtonDiv(button0));
  buttonGrid.appendChild(createButtonDiv(buttonPoint));

  // Fonction pour envelopper un bouton dans une div
  function createButtonDiv(button: HTMLButtonElement) {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("flex", "justify-center");
    if (button.textContent == "=") {
      buttonDiv.classList.add("row-span-2");
    }
    buttonDiv.appendChild(button);
    return buttonDiv;
  }

  const calculator = document.createElement("div");
  calculator.classList.add(
    "calculator",
    "flex",
    "flex-col",
    // "w-screen",
    "items-center",
    // "mt-0",
    "ml-5",
    "mr-5",
    "2xl:mt-20"
  );
  calculator.appendChild(textField);
  calculator.appendChild(buttonGrid);

  return calculator;
};

const calculatorContainer = document.getElementById("calculator");

if (calculatorContainer && calculatorContainer.childElementCount === 0) {
  const calculator = createCalculator();
  calculatorContainer.appendChild(calculator);
}
