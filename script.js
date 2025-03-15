const questions = [
    { text: "Placeholder", options: [] }, // Pergunta 1
    { text: "Placeholder", options: [] }, // Pergunta 2 (barras deslizantes)
    { text: "Placeholder", options: [] }, // Pergunta 3
    { text: "Placeholder", options: [] }, // Pergunta 4
    { text: "Placeholder", options: [] }, // Pergunta 5
    { text: "Placeholder", options: [] }, // Pergunta 6
    { text: "Placeholder", options: [] }, // Pergunta 7
    { text: "Placeholder", options: [] }, // Pergunta 8
    { text: "Placeholder", options: [] }, // Pergunta 9
    { text: "Placeholder", options: [] }  // Pergunta 10
];

let currentQuestion = 0;
const answers = {};

document.addEventListener("DOMContentLoaded", () => {
    updateNav(); 
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
                <input type='range' class='slider' id='q2a' min='-2' max='2' step='1' value='0'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Autonomia 🟢🔵🔴 Influência</label>
                <input type='range' class='slider' id='q2b' min='-2' max='2' step='1' value='0'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Impulsividade 🟢🔵🔴 Planejamento</label>
                <input type='range' class='slider' id='q2c' min='-2' max='2' step='1' value='0'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
            <div class='slider-container'>
                <label>Flexibilidade 🟢🔵🔴 Rigor</label>
                <input type='range' class='slider' id='q2d' min='-2' max='2' step='1' value='0'>
                <div class='slider-label'><span>-2</span><span>2</span></div>
            </div>
        `;
    }
}

function saveAnswer() {
    if (currentQuestion === 1) { // Pergunta 2 - Barras Deslizantes
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

function submitQuiz() {
    saveAnswer();
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
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
