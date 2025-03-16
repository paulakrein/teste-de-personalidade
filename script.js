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
    ] },
    { text: "Pergunta 11: Como você lida com conflitos e frustrações?", type: "slider11" },
    { text: "Pergunta 12: O que é mais importante para você em qualquer situação?", type: "draggable12",
        options: [
            "Independência e controle sobre o que acontece comigo",
            "Segurança e estabilidade, evitando erros e imprevistos",
            "Relacionamentos e aprovação das pessoas ao meu redor",
            "Criatividade, novidade e liberdade para explorar novas ideias",
            "Ordem e previsibilidade, saber que tudo está bem estruturado"
        ]
    }
];

let currentQuestion = 0;
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("quizAnswers"); // Isso zera as respostas ao recarregar a página
    loadQuestion();
});

function shuffleArray(array) {
    return array.map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
}

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
    }
    else if (questions[currentQuestion].type === "slider") {
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
    }
    else if (questions[currentQuestion].type === "slider11") {
        optionsDiv.innerHTML = `
            <div class='slider-container'>
                <label>Evito o confronto 🟢🔵🔴 Enfrento de cabeça</label>
                <input type='range' class='slider' id='q11a' min='1' max='5' step='1' value='${answers["11a"] || 3}'>
                <div class='slider-label'><span>1</span><span>5</span></div>
            </div>
            <div class='slider-container'>
                <label>Reprimo o que sinto 🟢🔵🔴 Expresso tudo intensamente</label>
                <input type='range' class='slider' id='q11b' min='1' max='5' step='1' value='${answers["11b"] || 3}'>
                <div class='slider-label'><span>1</span><span>5</span></div>
            </div>
            <div class='slider-container'>
                <label>A culpa é minha 🟢🔵🔴 A culpa é dos outros</label>
                <input type='range' class='slider' id='q11c' min='1' max='5' step='1' value='${answers["11c"] || 3}'>
                <div class='slider-label'><span>1</span><span>5</span></div>
            </div>
            <div class='slider-container'>
                <label>Eu aceito ordens 🟢🔵🔴 Eu desafio autoridade</label>
                <input type='range' class='slider' id='q11d' min='1' max='5' step='1' value='${answers["11d"] || 3}'>
                <div class='slider-label'><span>1</span><span>5</span></div>
            </div>
        `;
    }
    else if (questions[currentQuestion].type === "draggable12") {
        optionsDiv.innerHTML = "<ul id='draggable-list-12' class='draggable-list'></ul>";
        let list = document.getElementById("draggable-list-12");
    
        let optionsCopy = [...questions[currentQuestion].options]; // Copy the options to maintain order
        optionsCopy.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.draggable = true;
            listItem.dataset.index = index;
            listItem.addEventListener("dragstart", dragStart);
            listItem.addEventListener("dragover", dragOver);
            listItem.addEventListener("drop", drop);
            list.appendChild(listItem);
        });
    }
    else {
        // SHUFFLE
        // if (questions[currentQuestion].options) {
        //     let shuffledOptions = shuffleArray([...questions[currentQuestion].options]); // 🔹 Embaralha uma cópia, sem alterar o original
            
        //     shuffledOptions.forEach(option => {
        //         optionsDiv.innerHTML += `<label>
        //             <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
        //             ${option}
        //         </label><br>`;
        //     });
        // }
        // DO NOT SHUFFLE for testing
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
    }
    else if (questions[currentQuestion].type === "slider11") {
        answers["11a"] = document.getElementById("q11a").value;
        answers["11b"] = document.getElementById("q11b").value;
        answers["11c"] = document.getElementById("q11c").value;
        answers["11d"] = document.getElementById("q11d").value;
    }
    else if (questions[currentQuestion].type === "draggable12") {
        let items = document.querySelectorAll("#draggable-list-12 li");
        items.forEach((item, index) => {
            let itemText = item.textContent.trim();
            answers[`12${index + 1}`] = itemText;
        });
    }
    else {
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

    // 🔹 Pontuação das Barras da Pergunta 11 🔹
    const slider11Scores = {
        "11a": {
            "1": { t1: 2, t6: 2, t3: 1 },  // Antissocial, Narcisista, Borderline
            "2": { t2: 2, t7: 1 },  // Paranoide, Histriônico
            "3": { t4: 1, t9: 1 },  // Esquizotípico, Dependente
            "4": { t5: 2, t8: 1 },  // Obs. Compulsivo, Esquizoide
            "5": { t10: 2, t9: 2 }  // Evitativo, Dependente
        },
        "11b": {
            "1": { t8: 2, t2: 2 },  // Esquizoide, Paranoide
            "2": { t5: 2, t10: 1 },  // Obs. Compulsivo, Evitativo
            "3": { t4: 1, t9: 1 },  // Esquizotípico, Dependente
            "4": { t6: 1, t7: 1 },  // Narcisista, Histriônico
            "5": { t3: 2, t7: 2, t1: 1 }  // Borderline, Histriônico, Antissocial
        },
        "11c": {
            "1": { t9: 2, t3: 2 },  // Dependente, Borderline
            "2": { t5: 1, t4: 1 },  // Obs. Compulsivo, Esquizotípico
            "3": { t8: 1, t7: 1 },  // Esquizoide, Histriônico
            "4": { t2: 2, t6: 1 },  // Paranoide, Narcisista
            "5": { t1: 2, t6: 2, t2: 1 }  // Antissocial, Narcisista, Paranoide
        },
        "11d": {
            "1": { t9: 2, t10: 2 },  // Dependente, Evitativo
            "2": { t5: 1, t8: 1 },  // Obs. Compulsivo, Esquizoide
            "3": { t4: 1, t7: 1 },  // Esquizotípico, Histriônico
            "4": { t6: 2, t2: 1 },  // Narcisista, Paranoide
            "5": { t1: 2, t6: 2, t3: 1 }  // Antissocial, Narcisista, Borderline
        }
    };

    ["11a", "11b", "11c", "11d"].forEach(slider => {
        let value = savedAnswers[slider];
        if (value && slider11Scores[slider][value]) {
            Object.keys(slider11Scores[slider][value]).forEach(t => {
                transtornoScores[t] += slider11Scores[slider][value][t];
            });
        }
    });

    // 🔹 Pontuação da Pergunta 12 (Ordenação de Prioridades)
    const priorityScores12 = {
        "Independência e controle sobre o que acontece comigo": { main: ["t1", "t6"], secondary: "t2" },  // Antissocial, Narcisista, Paranoide
        "Segurança e estabilidade, evitando erros e imprevistos": { main: ["t9", "t10"], secondary: "t5" },  // Dependente, Evitativo, Obsessivo-Compulsivo
        "Relacionamentos e aprovação das pessoas ao meu redor": { main: ["t7", "t3"], secondary: "t9" },  // Histriônico, Borderline, Dependente
        "Criatividade, novidade e liberdade para explorar novas ideias": { main: ["t4", "t8"], secondary: "t1" },  // Esquizotípico, Esquizoide, Antissocial
        "Ordem e previsibilidade, saber que tudo está bem estruturado": { main: ["t5", "t2"], secondary: "t10" }  // Obsessivo-Compulsivo, Paranoide, Evitativo
    };

    const positionScores12 = {
        "121": { main: 2, secondary: 1 },  // 1º lugar → +2 para os principais, +1 para o secundário
        "122": { main: 1, secondary: 0 },  // 2º lugar → +1 para os principais
        "123": { main: 0, secondary: 1 }   // 3º lugar → +1 para o secundário
    };

    Object.keys(priorityScores12).forEach((key, index) => {
        let positionKey = `12${index + 1}`;
        let selectedOption = savedAnswers[positionKey]; // Pega a escolha do usuário para essa posição

        if (selectedOption && priorityScores12[selectedOption]) {
            let points = priorityScores12[selectedOption];
            
            // Aplica a pontuação conforme a posição
            if (positionScores12[positionKey]) {
                let scoreData = positionScores12[positionKey];

                // Adiciona pontos aos transtornos principais
                points.main.forEach(t => {
                    transtornoScores[t] += scoreData.main;
                });

                // Adiciona pontos ao transtorno secundário
                if (points.secondary) {
                    transtornoScores[points.secondary] += scoreData.secondary;
                }
            }
        }
    });
    
    // 🔹 Agora salva os resultados e redireciona
    localStorage.setItem("transtornoScores", JSON.stringify(transtornoScores)); 
    window.location.href = "results.html";
}
