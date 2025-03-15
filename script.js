window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.goToQuestion = goToQuestion;
window.submitQuiz = submitQuiz;

const questions = [
    "Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", 
    "Pergunta 6", "Pergunta 7", "Pergunta 8", "Pergunta 9", "Pergunta 10"
];

let currentQuestion = 0;
const answers = {};

function loadQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion];
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    for (let i = 1; i <= 10; i++) {
        optionsDiv.innerHTML += `
            <label>
                <input type='radio' name='q${currentQuestion}' value='${i}' ${answers[currentQuestion] === i ? "checked" : ""}>
                Opção ${i}
            </label><br>`;
    }
    updateNav();
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quiz-form").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function goToQuestion(qIndex) {
    saveAnswer();
    currentQuestion = qIndex;
    loadQuestion();
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name='q${currentQuestion}']:checked`);
    if (selectedOption) {
        answers[currentQuestion] = parseInt(selectedOption.value);
    }
}

function updateNav() {
    const navDiv = document.getElementById("question-nav");
    navDiv.innerHTML = "";
    questions.forEach((_, index) => {
        navDiv.innerHTML += `<button class='nav-btn' onclick='goToQuestion(${index})'>${index + 1}</button>`;
    });
}

function submitQuiz() {
    saveAnswer();
    window.location.href = "results.html";
}

document.addEventListener("DOMContentLoaded", loadQuestion);
