const questions = [
    { letter: "A", answer: "Alianza", question: "EQUIPO MAS GRANDE DE PERU." },
    { letter: "B", answer: "Barcelona", question: "Ciudad de España." },
    { letter: "C", answer: "Coche", question: "Vehículo de cuatro ruedas." },
    { letter: "D", answer: "dumbo", question: "Personaje de Disney." },
    { letter: "F", answer: "Futurama", question: "De que caricatura Bender." },
    { letter: "G", answer: "Gato", question: "Animal." },
    { letter: "H", answer: "H", question: "Letra con la que empieza el simbolo del oxigeno." },
    // Agrega más preguntas aquí...
];

let currentIndex = 0;
let correctCount = 0;

const questionElement = document.getElementById("question");
const letterElement = document.getElementById("letter");
const inputElement = document.getElementById("input-answer");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const lettersContainer = document.getElementById("letters-container");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");

function displayQuestion() {
    if (currentIndex < questions.length) {
        const currentQuestion = questions[currentIndex];
        questionElement.textContent = currentQuestion.question;
        letterElement.textContent = currentQuestion.letter;
        inputElement.value = "";
        inputElement.focus();
        generateLetters();
    } else {
        finishGame();
    }
}

function generateLetters() {
    lettersContainer.innerHTML = "";

    const currentQuestion = questions[currentIndex];
    const letters = currentQuestion.letter.toLowerCase().split("");

    letters.forEach((letter) => {
        const letterElement = document.createElement("div");
        letterElement.classList.add("letter");
        letterElement.textContent = letter;
        letterElement.addEventListener("click", () => checkAnswer(letter));
        lettersContainer.appendChild(letterElement);
    });
}

function checkAnswer(letter) {
    const currentQuestion = questions[currentIndex];
    const userAnswer = inputElement.value.trim().toLowerCase();

    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = "green";
      
        markLetter(letter, true);
        currentIndex++;
    
    } else {
        resultElement.textContent = "¡Incorrecto!";
        resultElement.style.color = "red";
        markLetter(letter, false);
    }
  

    currentIndex++;
    displayQuestion();
}

function markLetter(letter, isCorrect) {
    const letterElements = document.getElementsByClassName("letter");

    for (let i = 0; i < letterElements.length; i++) {
        const letterElement = letterElements[i];
        if (letterElement.textContent.toLowerCase() === letter.toLowerCase()) {
            letterElement.classList.add(isCorrect ? "correct" : "incorrect");
            letterElement.removeEventListener("click", () => checkAnswer(letter));
            break;
        }
    }
}

function finishGame() {
    questionElement.textContent = "Juego terminado";
    letterElement.textContent = "";
    inputElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.textContent = `Puntuación final: ${correctCount} respuestas correctas de ${questions.length}`;
    scoreElement.textContent = `Porcentaje de aciertos: ${((correctCount / questions.length) * 100).toFixed(2)}%`;
}

submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartGame);

function restartGame() {
    currentIndex = 0;
    correctCount = 0;
    displayQuestion();
    resultElement.textContent = "";
    resultElement.style.color = "";
    scoreElement.textContent = "";
    inputElement.style.display = "block";
    submitButton.style.display = "block";
    resetLetters();
}

function resetLetters() {
    const letterElements = document.getElementsByClassName("letter");

    for (let i = 0; i < letterElements.length; i++) {
        const letterElement = letterElements[i];
        letterElement.classList.remove("correct", "incorrect");
    }
}

displayQuestion();

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
    
  