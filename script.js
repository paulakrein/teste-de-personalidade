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
        options: [
            "Item A", "Item B", "Item C", "Item D", "Item E"
        ]
    },
    { text: "Pergunta 10",
        options: [
        "Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5",
        "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"
    ] }
];

let currentQuestion = 0;
let answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

// ** Garante que as respostas sejam apagadas ao recarregar a página **
document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("quizAnswers");
    answers = {};
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
    } else {
        questions[currentQuestion].options.forEach(option => {
            optionsDiv.innerHTML += `<label>
                <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
                ${option}
            </label><br>`;
        });
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name='q${currentQuestion}']:checked`);
    if (selectedOption) {
        answers[currentQuestion] = selectedOption.value;
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

    let transtornoScores = {
        t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, 
        t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
    };

    const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

    // **Agora TODAS as perguntas serão pontuadas**
    Object.keys(savedAnswers).forEach(qIndex => {
        let answer = savedAnswers[qIndex];
        if (answer) {
            let question = questions[qIndex]; // Captura a pergunta correta
            let answerIndex = question.options.indexOf(answer);
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
