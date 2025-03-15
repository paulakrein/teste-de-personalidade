const questions = [
    { text: "Pergunta 1",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 2", type: "slider" },
    { text: "Pergunta 3",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 4",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 5",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 6",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 7",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 8",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] },
    { text: "Pergunta 9",
        type: "draggable",
        options:
        [
            "Item A",
            "Item B",
            "Item C",
            "Item D",
            "Item E"
        ]
    },
    { text: "Pergunta 10",
        options: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4",
        "Resposta 5",
        "Resposta 6",
        "Resposta 7",
        "Resposta 8",
        "Resposta 9",
        "Resposta 10"
    ] }
];

let currentQuestion = 0;
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("quizAnswers"); // Isso zera as respostas ao recarregar a página
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
            optionsDiv.innerHTML += `<label>
                <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
                ${option}
            </label><br>`;
        });
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.index);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text/plain");
    const targetIndex = event.target.dataset.index;
    let list = document.getElementById("draggable-list");
    let items = Array.from(list.children);

    list.insertBefore(items[draggedIndex], items[targetIndex]);
    updateIndices();
}

function updateIndices() {
    let list = document.getElementById("draggable-list");
    let items = Array.from(list.children);
    items.forEach((item, index) => {
        item.dataset.index = index;
    });
}

function saveAnswer() {
    if (questions[currentQuestion].type === "draggable") {
        let items = document.querySelectorAll("#draggable-list li");
        items.forEach((item, index) => {
            let itemText = item.textContent.trim();
            answers[`9${itemText.charAt(itemText.length - 1).toLowerCase()}`] = `p${index + 1}`;
        });
    } else if (questions[currentQuestion].type === "slider") {
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

    let transtornoScores = {
        t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, 
        t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
    };

    const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

    // Definição dos clusters
    const clusters = {
        cluster1: ["t1", "t2", "t3"],
        cluster2: ["t4", "t5", "t6", "t7"],
        cluster3: ["t8", "t9", "t10"]
    };
    
    // 🔹 Pontuação das Barras da Pergunta 2 🔹
    const sliderScores = {
        "2a": { "-2": { c1: 4, c2: 0, c3: 2 }, "-1": { c1: 2, c2: 2, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 4, c3: 2 } },
        "2b": { "-2": { c1: 4, c2: 0, c3: 0 }, "-1": { c1: 2, c2: 0, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 4, c3: 2 } },
        "2c": { "-2": { c1: 0, c2: 4, c3: 2 }, "-1": { c1: 2, c2: 2, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 2, c2: 0, c3: 2 }, "2": { c1: 4, c2: 0, c3: 4 } },
        "2d": { "-2": { c1: 4, c2: 2, c3: 0 }, "-1": { c1: 2, c2: 2, c3: 0 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 0, c3: 4 } }
    };
    
    Object.keys(sliderScores).forEach(slider => {
        let value = savedAnswers[slider];
        if (value !== undefined) {
            let clusterPoints = sliderScores[slider][String(value)];
            clusters.cluster1.forEach(t => transtornoScores[t] += clusterPoints.c1);
            clusters.cluster2.forEach(t => transtornoScores[t] += clusterPoints.c2);
            clusters.cluster3.forEach(t => transtornoScores[t] += clusterPoints.c3);
        }
    });

    // Percorre todas as perguntas e pontua corretamente
    questions.forEach((question, index) => {
        let answer = savedAnswers[index];
        if (answer) {
            let answerIndex = question.options.indexOf(answer);
            if (answerIndex !== -1) {
                let transtornoKey = `t${answerIndex + 1}`;
                
                // Pontua +5 para o transtorno específico
                if (transtornoScores.hasOwnProperty(transtornoKey)) {
                    transtornoScores[transtornoKey] += 5;
                }

                // Pontua +2 para o cluster correspondente
                if (answerIndex < 3) {
                    clusters.cluster1.forEach(t => transtornoScores[t] += 2);
                } else if (answerIndex >= 3 && answerIndex <= 6) {
                    clusters.cluster2.forEach(t => transtornoScores[t] += 2);
                } else {
                    clusters.cluster3.forEach(t => transtornoScores[t] += 2);
                }
            }
        }
    });

    // 🔹 Pontuação da Pergunta 9 (Draggable) 🔹
    const priorityScores = {
        "p1": { primary: 10, secondary: 5 },
        "p2": { primary: 7, secondary: 3 },
        "p3": { primary: 4, secondary: 2 },
        "p4": { primary: 2, secondary: 1 },
        "p5": { primary: 0, secondary: 0 }
    };
// a=independencia b=lideranca e carisma c=estabilidade e proteção d=estrutura e controle e=reconhecimento e validação
    const question9Clusters = {
        "9a": { primary: "cluster1", secondary: "cluster2" },
        "9b": { primary: "cluster2", secondary: "cluster3" },
        "9c": { primary: "cluster3", secondary: "cluster1" },
        "9d": { primary: "cluster3", secondary: "cluster2" },
        "9e": { primary: "cluster2", secondary: "cluster1" }
    };

    Object.keys(question9Clusters).forEach(option => {
        let position = savedAnswers[option]; // Ex: "p1", "p2", etc.
        if (position && priorityScores[position]) {
            let clusterData = question9Clusters[option];

            // Adiciona pontos ao cluster principal
            clusters[clusterData.primary].forEach(t => {
                transtornoScores[t] += priorityScores[position].primary;
            });

            // Adiciona pontos ao cluster secundário (se existir)
            if (clusterData.secondary) {
                clusters[clusterData.secondary].forEach(t => {
                    transtornoScores[t] += priorityScores[position].secondary;
                });
            }
        }
    });

    // 🔹 Agora salva os resultados e redireciona
    localStorage.setItem("transtornoScores", JSON.stringify(transtornoScores)); 
    window.location.href = "results.html";
}
