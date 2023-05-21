document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var digitCountSelect = document.getElementById("digitCount");
    var questionContainer = document.getElementById("questionContainer");
    var question = document.getElementById("question");
    var answerInput = document.getElementById("answer");
    var checkButton = document.getElementById("checkButton");
    var resultStack = document.getElementById("resultStack");

    var digitCount = 1;
    var correctAnswer = 0;

    startButton.addEventListener("click", function () {
        digitCount = parseInt(digitCountSelect.value);
        generateQuestion();
        startButton.classList.add("hidden");
        questionContainer.classList.remove("hidden");
    });

    answerInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    checkButton.addEventListener("click", function () {
        checkAnswer();
    });

    function checkAnswer() {
        var userAnswer = parseInt(answerInput.value);
        var isCorrect = userAnswer === correctAnswer;
        var resultText = document.createElement("p");
        resultText.textContent = question.textContent + " " + (isCorrect ? "Correct!" : "Incorrect");
        resultStack.prepend(resultText);
        resultStack.scrollTop = 0;
        answerInput.value = "";
        generateQuestion();
    }

    function generateQuestion() {
        var num1 = generateRandomNumber(digitCount);
        var num2 = generateRandomNumber(digitCount);
        correctAnswer = num1 + num2;
        question.textContent = num1 + " + " + num2 + " =";
    }

    function generateRandomNumber(digitCount) {
        var min = Math.pow(10, digitCount - 1);
        var max = Math.pow(10, digitCount) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
