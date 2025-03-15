const questions = [
    { text: "Pergunta 1", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 2", options: [] }, // Pergunta 2 - Barras Deslizantes
    { text: "Pergunta 3", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 4", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 5", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 6", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 7", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 8", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 9", options: [] }, // Placeholder
    { text: "Pergunta 10", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] }
];

let currentQuestion = 0;
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion].text;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    if (currentQuestion === 1) { // Pergunta 2 - Barras Deslizantes
        optionsDiv.innerHTML = `
            <div class='slider-container'>
                <label>Razão 🟢🔵🔴 Emoção</label>
                <input type='range' class='slider' id='q2a' min='-2' max='2' step='1' value='${answers["2a"] || 0}'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Autonomia 🟢🔵🔴 Influência</label>
                <input type='range' class='slider' id='q2b' min='-2' max='2' step='1' value='${answers["2b"] || 0}'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Impulsividade 🟢🔵🔴 Planejamento</label>
                <input type='range' class='slider' id='q2c' min='-2' max='2' step='1' value='${answers["2c"] || 0}'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Flexibilidade 🟢🔵🔴 Rigor</label>
                <input type='range' class='slider' id='q2d' min='-2' max='2' step='1' value='${answers["2d"] || 0}'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
        `;
    } else {
        questions[currentQuestion].options.forEach(option => {
            optionsDiv.innerHTML += `
                <label>
                    <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
                    ${option}
                </label><br>`;
        });
    }
}

function saveAnswer() {
    if (currentQuestion === 1) {
        answers["2a"] = document.getElementById("q2a").value;
        answers["2b"] = document.getElementById("q2b").value;
        answers["2c"] = document.getElementById("q2c").value;
        answers["2d"] = document.getElementById("q2d").value;
    } else {
        const selectedOption = document.querySelector(`input[name='q${currentQuestion}']:checked`);
        if (selectedOption) {
            answers[currentQuestion] = selectedOption.value;
        }
    }
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    saveAnswer();
    window.location.href = "results.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const resultsDiv = document.getElementById("results");
    if (resultsDiv) {
        const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
        Object.keys(savedAnswers).forEach(qIndex => {
            resultsDiv.innerHTML += `<p>Pergunta ${qIndex}: Você escolheu '${savedAnswers[qIndex]}'</p>`;
        });
    }
});
