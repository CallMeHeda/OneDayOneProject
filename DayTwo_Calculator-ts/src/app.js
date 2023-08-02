var createButton = function (text, onClick) {
    var button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", onClick);
    button.classList.add("bg-slate-600", "hover:bg-slate-800", "text-white", "font-semibold", "text-lg", "rounded", "px-4", "py-2", "w-screen", "text-center", "2xl:py-4", "2xl:font-bold", "2xl:text-xl");
    if (button.textContent === "=") {
        button.classList.add("h-full", "bg-rose-600", "hover:bg-rose-500");
    }
    if (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "DEL" ||
        button.textContent === "X" ||
        button.textContent === "/" ||
        button.textContent === "C") {
        button.classList.add("bg-slate-800", "hover:bg-gray-600");
    }
    return button;
};
var createCalculator = function () {
    var basicValue = "";
    var finalValue = "";
    var textField = document.createElement("textarea");
    textField.setAttribute("type", "text");
    textField.setAttribute("readonly", "true");
    textField.classList.add("flex", "bg-gray-900", "pt-12", "pb-2", "px-4", "rounded-t", "focus:outline-none", "w-full", "2xl:w-1/2", "font-bold", "text-2xl", "resize-none", "text-white");
    var buttonGrid = document.createElement("div");
    buttonGrid.classList.add("grid", "grid-cols-4", "gap-1", "2xl:w-3/6");
    // ROW 1
    var buttonReset = createButton("C", function () {
        basicValue = "";
        finalValue = "";
        textField.value = basicValue;
    });
    var buttonDivide = createButton("/", function () {
        if (finalValue != "") {
            basicValue = "";
            basicValue += finalValue;
        }
        basicValue += "/";
        textField.value = basicValue;
    });
    var buttonMult = createButton("X", function () {
        if (finalValue != "") {
            basicValue = "";
            basicValue += finalValue;
        }
        basicValue += "*";
        textField.value = basicValue;
    });
    var buttonDel = createButton("DEL", function () {
        basicValue = basicValue.toString().slice(0, -1);
        textField.value = basicValue;
    });
    buttonGrid.appendChild(createButtonDiv(buttonReset));
    buttonGrid.appendChild(createButtonDiv(buttonDivide));
    buttonGrid.appendChild(createButtonDiv(buttonMult));
    buttonGrid.appendChild(createButtonDiv(buttonDel));
    // ROW 2
    var button7 = createButton("7", function () {
        basicValue += "7";
        textField.value = basicValue;
    });
    var button8 = createButton("8", function () {
        basicValue += "8";
        textField.value = basicValue;
    });
    var button9 = createButton("9", function () {
        basicValue += "9";
        textField.value = basicValue;
    });
    var buttonMinus = createButton("-", function () {
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
    var button4 = createButton("4", function () {
        basicValue += "4";
        textField.value = basicValue;
    });
    var button5 = createButton("5", function () {
        basicValue += "5";
        textField.value = basicValue;
    });
    var button6 = createButton("6", function () {
        basicValue += "6";
        textField.value = basicValue;
    });
    var buttonPlus = createButton("+", function () {
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
    var button1 = createButton("1", function () {
        basicValue += "1";
        textField.value = basicValue;
    });
    var button2 = createButton("2", function () {
        basicValue += "2";
        textField.value = basicValue;
    });
    var button3 = createButton("3", function () {
        basicValue += "3";
        textField.value = basicValue;
    });
    var buttonEqual = createButton("=", function () {
        finalValue = eval(basicValue);
        textField.value = finalValue;
        console.log(finalValue + " " + basicValue);
    });
    buttonGrid.appendChild(createButtonDiv(button1));
    buttonGrid.appendChild(createButtonDiv(button2));
    buttonGrid.appendChild(createButtonDiv(button3));
    buttonGrid.appendChild(createButtonDiv(buttonEqual));
    // ROW 5
    var buttonPercent = createButton("%", function () {
        if (finalValue != "") {
            basicValue = "";
            basicValue += finalValue;
        }
        basicValue += "%";
        textField.value = basicValue;
    });
    var button0 = createButton("0", function () {
        basicValue += "0";
        textField.value = basicValue;
    });
    var buttonPoint = createButton(".", function () {
        basicValue += ".";
        textField.value = basicValue;
    });
    buttonGrid.appendChild(createButtonDiv(buttonPercent));
    buttonGrid.appendChild(createButtonDiv(button0));
    buttonGrid.appendChild(createButtonDiv(buttonPoint));
    // Fonction pour envelopper un bouton dans une div
    function createButtonDiv(button) {
        var buttonDiv = document.createElement("div");
        buttonDiv.classList.add("flex", "justify-center");
        if (button.textContent == "=") {
            buttonDiv.classList.add("row-span-2");
        }
        buttonDiv.appendChild(button);
        return buttonDiv;
    }
    var calculator = document.createElement("div");
    calculator.classList.add("calculator", "flex", "flex-col", 
    // "w-screen",
    "items-center", 
    // "mt-0",
    "ml-5", "mr-5", "2xl:mt-20");
    calculator.appendChild(textField);
    calculator.appendChild(buttonGrid);
    return calculator;
};
var calculatorContainer = document.getElementById("calculator");
if (calculatorContainer && calculatorContainer.childElementCount === 0) {
    var calculator = createCalculator();
    calculatorContainer.appendChild(calculator);
}
