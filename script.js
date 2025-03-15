
const questions = [
    { text: "Pergunta 1",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 2", type: "slider" },
    { text: "Pergunta 3",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 4",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 5",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 6",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 7",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 8",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] },
    { text: "Pergunta 9",
        type: "draggable",
        options: ["Item A", "Item B", "Item C", "Item D", "Item E"]
    },
    { text: "Pergunta 10",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] }
];

let currentQuestion = 0;
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("quizAnswers");
    loadQuestion();
});

function loadQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion].text;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    if (questions[currentQuestion].type === "draggable") {
        optionsDiv.innerHTML = "<ul id='draggable-list' class='draggable-list'></ul>";
        let list = document.getElementById("draggable-list");

        questions[currentQuestion].options.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.draggable = true;
            listItem.dataset.index = index;
            listItem.addEventListener("dragstart", dragStart);
            listItem.addEventListener("dragover", dragOver);
            listItem.addEventListener("drop", drop);
            list.appendChild(listItem);
        });
    } else if (questions[currentQuestion].type === "slider") {
        optionsDiv.innerHTML = `
            <div class='slider-container'>
                <label>Razão 🟢🔵🔴 Emoção</label>
                <input type='range' class='slider' id='q2a' min='-2' max='2' step='1' value='${answers["2a"] || 0}'>
            </div>
            <div class='slider-container'>
                <label>Autonomia 🟢🔵🔴 Influência</label>
                <input type='range' class='slider' id='q2b' min='-2' max='2' step='1' value='${answers["2b"] || 0}'>
            </div>
            <div class='slider-container'>
                <label>Impulsividade 🟢🔵🔴 Planejamento</label>
                <input type='range' class='slider' id='q2c' min='-2' max='2' step='1' value='${answers["2c"] || 0}'>
            </div>
            <div class='slider-container'>
                <label>Flexibilidade 🟢🔵🔴 Rigor</label>
                <input type='range' class='slider' id='q2d' min='-2' max='2' step='1' value='${answers["2d"] || 0}'>
            </div>
        `;
    } else {
        questions[currentQuestion].options.forEach(option => {
            optionsDiv.innerHTML += `<label>
                <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
                ${option}
            </label><br>`;
        });
    }
}

function submitQuiz() {
    saveAnswer();

    let transtornoScores = {
        t1: 0, t2: 0, t3: 0, t4: 0, t5: 0,
        t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
    };

    const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

    questions.forEach((question, index) => {
        let answer = savedAnswers[index];
        if (answer) {
            let answerIndex = question.options ? question.options.indexOf(answer) : -1;
            if (answerIndex !== -1) {
                let transtornoKey = `t${answerIndex + 1}`;
                if (transtornoScores.hasOwnProperty(transtornoKey)) {
                    transtornoScores[transtornoKey] += 1;
                }
            }
        }
    });

    localStorage.setItem("transtornoScores", JSON.stringify(transtornoScores));
    window.location.href = "results.html";
}
