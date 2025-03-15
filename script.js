
const questions = [
    { text: "Pergunta 1", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 2", options: [] }, // Pergunta 2 - Barras Deslizantes
    { text: "Pergunta 3", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 4", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 5", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 6", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 7", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 8", options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5", "Resposta 6", "Resposta 7", "Resposta 8", "Resposta 9", "Resposta 10"] },
    { text: "Pergunta 9", type: "draggable", options: ["Item A", "Item B", "Item C", "Item D", "Item E"] },
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
