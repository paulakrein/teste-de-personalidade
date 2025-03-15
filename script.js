const questions = [
    "Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", 
    "Pergunta 6", "Pergunta 7", "Pergunta 8", "Pergunta 9", "Pergunta 10"
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion];
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        optionsDiv.innerHTML += `<label><input type='radio' name='q${currentQuestion}' value='${i}'> Opção ${i}</label><br>`;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quiz-form").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function goToQuestion(qIndex) {
    currentQuestion = qIndex;
    loadQuestion();
}

function submitQuiz() {
    window.location.href = "results.html";
}

document.addEventListener("DOMContentLoaded", loadQuestion);
