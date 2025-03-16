// t1 Esquizoide
// t2 Esquizotípico 
// t3 Paranoide
// t4 Borderline
// t5 Histriônico
// t6 Narcisista
// t7 Anti-social
// t8 Obsessivo-compulsivo
// t9 Dependente
// t10 Evitativo
// 🔹 Mapeamento de transtornos para arquétipos 🔹

// 🔹 Mapeamento de transtornos para os 36 arquétipos 🔹
const archetypes = [
    { name: "🧙 O Eremita", match: ["t1", "t2", "t10"] }, 
    { name: "🔮 O Visionário", match: ["t2", "t4", "t6"] }, 
    { name: "🛡️ O Guardião Desconfiado", match: ["t3", "t2", "t8"] }, 
    { name: "🌑 O Forasteiro", match: ["t1", "t10", "t9"] }, 
    { name: "👁️ O Investigador Oculto", match: ["t3", "t7", "t6"] }, 
    { name: "🕸️ O Estranho Encantador", match: ["t2", "t5", "t6"] }, 
    { name: "🎭 O Rei do Palco", match: ["t5", "t6", "t7"] }, 
    { name: "💔 O Príncipe Trágico", match: ["t4", "t5", "t9"] }, 
    { name: "🕶️ O Mestre das Sombras", match: ["t7", "t6", "t3"] }, 
    { name: "🔥 O Incendiário", match: ["t4", "t5", "t7"] }, 
    { name: "👑 O Imperador", match: ["t6", "t8", "t5"] }, 
    { name: "🃏 O Caos Personificado", match: ["t7", "t4", "t2"] }, 
    { name: "🔪 O Predador Social", match: ["t7", "t8", "t3"] }, 
    { name: "💃 O Encantador Fatal", match: ["t5", "t6", "t4"] }, 
    { name: "📜 O Guardião das Regras", match: ["t8", "t3", "t9"] }, 
    { name: "🌀 O Prisioneiro da Dúvida", match: ["t10", "t8", "t9"] }, 
    { name: "🕊️ O Seguidor Leal", match: ["t9", "t5", "t10"] }, 
    { name: "🛠️ O Perfeccionista Incansável", match: ["t8", "t6", "t4"] }, 
    { name: "🧩 O Estrategista Silencioso", match: ["t10", "t8", "t3"] }, 
    { name: "🌙 O Fantasma Social", match: ["t10", "t4", "t1"] },
    { name: "📖 O Filósofo Recluso", match: ["t1", "t8", "t10"] },
    { name: "🌀 O Andarilho dos Sonhos", match: ["t2", "t9", "t4"] },
    { name: "🕵️ O Decodificador de Mistérios", match: ["t3", "t1", "t8"] },
    { name: "🎨 O Artista do Caos", match: ["t5", "t4", "t2"] },
    { name: "🌀 O Furacão Imprevisível", match: ["t4", "t7", "t5"] },
    { name: "🎤 O Manipulador de Multidões", match: ["t6", "t5", "t7"] },
    { name: "🔥 O Fogo Indomável", match: ["t4", "t6", "t7"] },
    { name: "📜 O Discípulo da Disciplina", match: ["t8", "t9", "t3"] },
    { name: "🧭 O Navegador da Precaução", match: ["t10", "t3", "t8"] },
    { name: "🌍 O Diplomata Invisível", match: ["t9", "t6", "t5"] },
    { name: "🛑 O Medroso Incorrigível", match: ["t10", "t9", "t3"] },
    { name: "🕰️ O Controlador do Tempo", match: ["t8", "t6", "t2"] },
    { name: "🌊 O Coração Frágil", match: ["t10", "t9", "t4"] }
];

// Definição dos clusters
const clusters = {
    cluster1: ["t1", "t2", "t3"],
    cluster2: ["t4", "t5", "t6", "t7"],
    cluster3: ["t8", "t9", "t10"]
};

const questions = [
    { text: "Se você tivesse que escrever uma bio curta e sincera para um perfil anônimo, o que diria?",
        options: [
        "Só observando, nada pessoal…",
        "Um sonhador curioso viajando entre realidades.",
        "Sempre alerta.",
        "Numa mudança constante. Me avise se entender alguma coisa!",
        "Gosto de pessoas, de histórias e de boas conversas.",
        "Não sigo tendências, crio.",
        "É simples assim: a vida é um jogo, e eu jogo para ganhar.",
        "Se eu me propus a algo, que seja bem feito.",
        "Não sou bom em decidir sobre essas coisas… O que você acha?",
        "Se eu soubesse que ninguém julgaria, até falaria mais…"
    ] },
    { text: "Você está diante de uma decisão importante, como costuma lidar com isso?", type: "slider" },
    { text: "Quando alguém se aproxima querendo ser seu amigo, como você reage?",
        options: [
        "Se for alguém mais na dele e que respeite meu espaço, daí tudo bem.",
        "É algo desconfortável, pois é difícil saber o que as pessoas querem e esperam.",
        "Não sei… Preciso observar melhor o comportamento dela pra ter mais segurança.",
        "Se essa pessoa se interessar de verdade, me aproximo e me apego com facilidade.",
        "Quanto mais amigos melhor… Gosto de conhecer pessoas novas, espero que sejam divertidas.",
        "Acho que não é todo mundo que merece atenção, mas eu gosto quando me admiram e se interessam por mim.",
        "Amizades vêm e vão… Essa pessoa tem algo a me oferecer?",
        "Tenho dificuldade em lidar com gente impulsiva ou emocional demais.",
        "Tento agradar para já garantir que gostem de mim.",
        "Tenho medo de ter criado alguma expectativa e depois decepcionar as pessoas."
    ] },
    { text: "Você está passando por um período difícil. Como lida com isso?",
        options: [
        "Passo por isso sozinho, como sempre. E está tudo bem, vai se resolver, é assim que as coisas são.",
        "Fico preso em pensamentos, analisando sinais e padrões no mundo, tentando entender o que significa.",
        "Redobro minha atenção e analiso tudo ao meu redor com mais cuidado.",
        "Preciso de alguém para me ouvir e me lembrar de que as coisas vão ficar bem.",
        "Compartilho com amigos… Preciso sentir que estou sendo ouvido.",
        "Não perco tempo me lamentando… Sei que é temporário, que tenho capacidade pra resolver e que tudo será um crescimento no fim.",
        "As pessoas se complicam muito. A situação parece difícil? Mudo meu caminho e pronto.",
        "Me concentro no que posso controlar, e planejo pra resolver da forma mais eficiente possível.",
        "Preciso do apoio das pessoas pra me ajudarem a tomar decisões.",
        "É difícil pedir ajuda, mesmo quando preciso."
    ] },
    { text: "Você está em uma conversa e alguém diz algo com que você discorda. Como reage?",
        options: [
        "Provavelmente não direi nada porque não vejo motivo pra discutir.",
        "Eu explico, mas ninguém nunca me entende.",
        "Não quero que outros influenciem o que eu penso, então defendo firmemente minhas opiniões.",
        "Se for alguém importante pra mim, fico angustiado tentando entender por que discordamos.",
        "Gosto de debater, desde que me escutem também.",
        "Gosto de discutir, e com frequência convenço os outros, pois falo com segurança e propriedade.",
        "Gosto de testar até onde as pessoas vão para defender o ponto de vista delas.",
        "Apresento argumentos lógicos e bem estruturados.",
        "Concordo fácil com pessoas confiantes ou com quem eu gosto.",
        "Se for uma conversa difícil, desvio do assunto."
    ] },
    { text: "Você entra em um grupo novo. Como se sente e age?",
        options: [
        "Se eu puder evitar interações desnecessárias, melhor.",
        "Tenho curiosidade em ficar observando os padrões de comportamento das pessoas.",
        "Me preocupa a ideia de que possam estar falando de mim sem eu saber.",
        "Me sinto deslocado, mas quero muito ser aceito.",
        "Acompanho o tom do grupo, mas sempre levo energia com um toque especial meu.",
        "Observo primeiro quem vale a pena, e então me conecto com as pessoas certas.",
        "Identifico as dinâmicas do grupo para poder ter controle.",
        "Se o grupo for muito desorganizado vou tentar colocar alguma ordem.",
        "Espero que alguém me inclua nas conversas, pois tenho medo de me intrometer.",
        "Só participo se perceber que é um ambiente seguro e receptivo."
    ] },
    { text: "O que pode realmente te tirar do sério?",
        options: [
        "Ser forçado a interagir quando não estou afim.",
        "Quando não consigo expressar direito minhas ideias, ou noto que minhas experiências não são compartilhadas.",
        "Quando percebo que estão tentando me passar para trás.",
        "Quando sinto que estou sendo deixado de lado.",
        "Ser interrompido no meio de uma fala importante.",
        "Perder para alguém menos competente que eu.",
        "Gente sensível demais e que faz drama por qualquer coisa.",
        "Mudanças de última hora que bagunçam os planos.",
        "Ser deixado sozinho para lidar com um problema.",
        "Ser criticado ou humilhado em público."
    ] },
    { text: "Algo inesperado acontece e muda totalmente seus planos. Como você reage?",
        options: [
        "Tanto faz. Nunca estive muito apegado aos planos de qualquer jeito.",
        "Genial! E se isso mudar as coisas de um jeito inusitado, e me trazer algo que eu nem sabia que precisava?",
        "Estranho... Por que isso aconteceu justo agora? O que está por trás disso?",
        "Se eu estava animado para algo e os planos mudam, sinto por um tempo que tudo perdeu o sentido.",
        "Ótimo! Mudanças são boas pois quebram o tédio da rotina.",
        "Meu plano original ainda é melhor, só preciso encontrar um jeito de aplicá-lo nas novas circunstâncias.",
        "Se eu não gostar, ignoro os limitantes e faço as coisas do meu jeito de qualquer forma.",
        "Preciso reorganizar tudo do zero, e gasto um tempão nisso.",
        "Eu travo e não consigo tomar novas decisões, então procuro alguém pra me ajudar.",
        "Fico ansioso e tento me preparar para o pior cenário possível."
    ] },
    { text: "quando você está dentro de um grupo, o que é mais importante para você? Coloque em ordem de prioridade.",
        type: "draggable",
        options:
        [
            "Independência",
            "Liderança e Carisma",
            "Estabilidade e Proteção",
            "Estrutura e Controle",
            "Reconhecimento e Validação"
        ]
    },
    { text: "Se sua mente fosse um lugar, como ela seria?",
        options: [
        "Uma biblioteca silenciosa, onde só eu posso entrar e explorar.",
        "Um reino mágico underground, onde as leis da lógica não funcionam da mesma forma.",
        "Um tabuleiro de xadrez sem limites, onde preciso antecipar todos os movimentos possíveis.",
        "Um palácio feito de mosaicos coloridos - belos, diversos, frágeis, sempre prestes a se quebrar.",
        "Um festival de arte, música e teatro, com programação nova todos os dias.",
        "Uma torre muito alta, com vista para tudo e todos.",
        "Uma casa de pôquer clandestina, onde só vence quem arrisca alto, pensa rápido e blefa melhor.",
        "Um relógio suíço, preciso, impecável, prático e eficiente.",
        "Um barzinho de samba, vibrante e animado quando cheio de gente que se gosta.",
        "Um tribunal de justiça, onde todos os movimentos são analisados e julgados."
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

function updateQuestionCounter() {
    document.getElementById("question-counter").innerText = `${currentQuestion + 1}/${questions.length}`;
}

function loadQuestion() {
    updateQuestionCounter(); // 🔹 Atualiza o contador de perguntas sempre que carregar uma nova pergunta

    document.getElementById("question-text").innerText = questions[currentQuestion].text;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    document.getElementById('answer-inner').classList.remove('grid');
  
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
            <div class="slider-labels">
                <span>Razão</span>
                <span>Emoção</span>
            </div>
            <input type='range' class='slider' id='q2a' min='-2' max='2' step='1' value='${answers["2a"] || 0}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>Autonomia</span>
                <span>Influência</span>
            </div>
            <input type='range' class='slider' id='q2b' min='-2' max='2' step='1' value='${answers["2b"] || 0}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>Impulsividade</span>
                <span>Planejamento</span>
            </div>
            <input type='range' class='slider' id='q2c' min='-2' max='2' step='1' value='${answers["2c"] || 0}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>Flexibilidade</span>
                <span>Rigor</span>
            </div>
            <input type='range' class='slider' id='q2d' min='-2' max='2' step='1' value='${answers["2d"] || 0}'>
        </div>
    `;
}
   else if (questions[currentQuestion].type === "slider11") {
    optionsDiv.innerHTML = `
        <div class='slider-container'>
            <div class="slider-labels">
                <span>Evito o confronto</span>
                <span>Enfrento de cabeça</span>
            </div>
            <input type='range' class='slider' id='q11a' min='1' max='5' step='1' value='${answers["11a"] || 3}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>Reprimo o que sinto</span>
                <span>Expresso tudo intensamente</span>
            </div>
            <input type='range' class='slider' id='q11b' min='1' max='5' step='1' value='${answers["11b"] || 3}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>A culpa é minha</span>
                <span>A culpa é dos outros</span>
            </div>
            <input type='range' class='slider' id='q11c' min='1' max='5' step='1' value='${answers["11c"] || 3}'>
        </div>

        <div class='slider-container'>
            <div class="slider-labels">
                <span>Eu aceito ordens</span>
                <span>Eu desafio autoridade</span>
            </div>
            <input type='range' class='slider' id='q11d' min='1' max='5' step='1' value='${answers["11d"] || 3}'>
        </div>
    `;
}
    else if (questions[currentQuestion].type === "draggable12") {
        optionsDiv.innerHTML = "<ul id='draggable-list-12' class='draggable-list'></ul>";
        let list = document.getElementById("draggable-list-12");
    
        let optionsCopy = [...questions[currentQuestion].options]; // Copy options for randomization
        optionsCopy.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.draggable = true;
            listItem.dataset.index = index;
            
            // Ensure event listeners for draggable actions
            listItem.addEventListener("dragstart", dragStart12);
            listItem.addEventListener("dragover", dragOver12);
            listItem.addEventListener("drop", drop12);
    
            list.appendChild(listItem);
        });
    }
    else {
      document.getElementById('answer-inner').classList.add('grid');
      
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
            optionsDiv.innerHTML += `<label class="module">
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

function dragStart12(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.index);
}

function dragOver12(event) {
    event.preventDefault();
}

function drop12(event) {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text/plain");
    const targetIndex = event.target.dataset.index;
    let list = document.getElementById("draggable-list-12");
    let items = Array.from(list.children);

    if (draggedIndex !== targetIndex) {
        let draggedItem = items[draggedIndex];
        let targetItem = items[targetIndex];

        if (draggedItem && targetItem) {
            list.insertBefore(draggedItem, targetItem);
            updateIndices12();
        }
    }
}

function updateIndices12() {
    let list = document.getElementById("draggable-list-12");
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
            answers[`12p${index + 1}`] = itemText; // Stores priority ranking as "12p1", "12p2", etc.
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
        
      updateQuestionCounter(); // 🔹 Atualiza o contador ao avançar para a próxima pergunta

        // 🔹 Faz a rolagem para o topo da página
        window.scrollTo({ top: 0, behavior: "smooth" });
        
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
      
    updateQuestionCounter(); // 🔹 Atualiza o contador ao voltar para a pergunta anterior
  
        loadQuestion();
    } else {
        window.location.href = "index.html"; // 🔹 Redireciona para a página inicial se estiver na primeira pergunta
    }
}

// 🔹 Função para encontrar o melhor arquétipo considerando os Clusters corretos
function getArchetype(transtornoScores) {
    // 1️⃣ Ordena os transtornos por pontuação (do maior para o menor)
    let sortedTranstornos = Object.entries(transtornoScores).sort((a, b) => b[1] - a[1]);

    // 2️⃣ Seleciona os três transtornos mais pontuados
    let top3 = [sortedTranstornos[0][0], sortedTranstornos[1][0], sortedTranstornos[2][0]];
    let primaryTranstorno = top3[0];  // O transtorno principal
    let secondaryTranstornos = [top3[1], top3[2]];  // Os dois transtornos secundários

    // 3️⃣ Procura um arquétipo que tenha exatamente esses três transtornos
    let bestMatch = archetypes.find(a => a.match.every(t => top3.includes(t)));

    // 4️⃣ Se não encontrar um match exato, tenta um arquétipo que tenha o transtorno principal + pelo menos um secundário
    if (!bestMatch) {
        bestMatch = archetypes.find(a => 
            a.match.includes(primaryTranstorno) &&
            (a.match.includes(secondaryTranstornos[0]) || a.match.includes(secondaryTranstornos[1]))
        );
    }

    // 5️⃣ Se ainda não encontrar, usa Clusters (substituindo ClusterA, ClusterB, ClusterC por Cluster1, Cluster2, Cluster3)
    if (!bestMatch) {
        let primaryCluster = Object.keys(clusters).find(cluster => clusters[cluster].includes(primaryTranstorno));
        let secondaryClusters = secondaryTranstornos.map(st => Object.keys(clusters).find(cluster => clusters[cluster].includes(st)));

        bestMatch = archetypes.find(a => 
            a.match.includes(primaryTranstorno) &&
            secondaryClusters.some(cluster => a.match.some(t => clusters[cluster]?.includes(t)))
        );
    }

    // 6️⃣ Se ainda não houver correspondência, usa um arquétipo que tenha **apenas** o transtorno principal
    if (!bestMatch) {
        bestMatch = archetypes.find(a => a.match.includes(primaryTranstorno));
    }

    // Retorna o nome do arquétipo encontrado
    return bestMatch ? bestMatch.name : "🔍 Arquétipo desconhecido";
}


function submitQuiz() {
    saveAnswer();

    let transtornoScores = {
        t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, 
        t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
    };

    const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
    
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
            "1": { t7: 2, t6: 2, t4: 1 },  // Antissocial, Narcisista, Borderline
            "2": { t3: 2, t5: 1 },  // Paranoide, Histriônico
            "3": { t2: 1, t9: 1 },  // Esquizotípico, Dependente
            "4": { t8: 2, t1: 1 },  // Obsessivo-Compulsivo, Esquizoide
            "5": { t10: 2, t9: 2 }  // Evitativo, Dependente
        },
        "11b": {
            "1": { t1: 2, t3: 2 },  // Esquizoide, Paranoide
            "2": { t8: 2, t10: 1 },  // Obsessivo-Compulsivo, Evitativo
            "3": { t2: 1, t9: 1 },  // Esquizotípico, Dependente
            "4": { t6: 1, t5: 1 },  // Narcisista, Histriônico
            "5": { t4: 2, t5: 2, t7: 1 }  // Borderline, Histriônico, Antissocial
        },
        "11c": {
            "1": { t9: 2, t3: 2 },  // Dependente, Paranoide
            "2": { t8: 1, t2: 1 },  // Obsessivo-Compulsivo, Esquizotípico
            "3": { t1: 2, t7: 1 },  // Esquizoide, Antissocial
            "4": { t3: 2, t6: 1 },  // Paranoide, Narcisista
            "5": { t7: 2, t6: 2, t4: 1 }  // Antissocial, Narcisista, Borderline
        },
        "11d": {
            "1": { t9: 2, t10: 2 },  // Dependente, Evitativo
            "2": { t8: 1, t1: 1 },  // Obsessivo-Compulsivo, Esquizoide
            "3": { t2: 1, t4: 1 },  // Esquizotípico, Borderline
            "4": { t3: 2, t6: 1 },  // Paranoide, Narcisista
            "5": { t7: 2, t6: 2, t4: 1 }  // Antissocial, Narcisista, Borderline
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
        "Independência e controle sobre o que acontece comigo": { main: ["t7", "t6"], secondary: "t3" },  // Antissocial, Narcisista, Paranoide
        "Segurança e estabilidade, evitando erros e imprevistos": { main: ["t9", "t10"], secondary: "t8" },  // Dependente, Evitativo, Obsessivo-Compulsivo
        "Relacionamentos e aprovação das pessoas ao meu redor": { main: ["t5", "t4"], secondary: "t9" },  // Histriônico, Borderline, Dependente
        "Criatividade, novidade e liberdade para explorar novas ideias": { main: ["t2", "t1"], secondary: "t7" },  // Esquizotípico, Esquizoide, Antissocial
        "Ordem e previsibilidade, saber que tudo está bem estruturado": { main: ["t8", "t3"], secondary: "t10" }  // Obsessivo-Compulsivo, Paranoide, Evitativo
    };

// 🔹 Pontuação da Pergunta 12 (Ordenação de Prioridades)
const positionScores12 = {
    "12p1": { main: 2, secondary: 1 },  // 1º lugar → +2 para principais, +1 para secundário
    "12p2": { main: 1, secondary: 0 },  // 2º lugar → +1 para principais
    "12p3": { main: 0, secondary: 1 }   // 3º lugar → +1 para secundário
};

// 🔹 Itera sobre as respostas do usuário na Pergunta 12
Object.keys(positionScores12).forEach(positionKey => {
    let selectedOption = savedAnswers[positionKey];  // Obtém a opção escolhida pelo usuário

    if (selectedOption && priorityScores12[selectedOption]) {
        let points = priorityScores12[selectedOption];  // Obtém os transtornos relacionados
        let scoreData = positionScores12[positionKey];  // Obtém os valores de pontuação

        // 🔹 Adiciona pontos aos transtornos principais
        points.main.forEach(t => {
            if (transtornoScores.hasOwnProperty(t)) {
                transtornoScores[t] += scoreData.main;
            }
        });

        // 🔹 Adiciona pontos ao transtorno secundário
        if (points.secondary && transtornoScores.hasOwnProperty(points.secondary)) {
            transtornoScores[points.secondary] += scoreData.secondary;
        }
    }
});
    
    // 🔹 Critério de Desempate (Pergunta 12)
    let scoresArray = Object.entries(transtornoScores);

    // 1️⃣ Ordena os transtornos pela pontuação
    scoresArray.sort((a, b) => b[1] - a[1]);

    // 2️⃣ Verifica se há empate entre os dois transtornos mais pontuados
    if (scoresArray.length > 1 && scoresArray[0][1] === scoresArray[1][1]) {
        let tiedTranstornos = [scoresArray[0][0], scoresArray[1][0]]; // Pegamos os transtornos empatados

        // 3️⃣ Se um deles pontuou no 1º lugar da Pergunta 12, recebe +1 ponto extra
        let firstPlace = savedAnswers["12p1"]; 
        if (firstPlace && priorityScores12[firstPlace]) {
            let firstTranstornos = priorityScores12[firstPlace].main; // Os principais do 1º lugar
            let winner = firstTranstornos.find(t => tiedTranstornos.includes(t));
            if (winner) {
                transtornoScores[winner] += 1; // Desempate!
            } else {
                // 4️⃣ Se nenhum deles pontuou no 1º lugar, verificamos o 2º lugar
                let secondPlace = savedAnswers["12p2"];
                if (secondPlace && priorityScores12[secondPlace]) {
                    let secondTranstornos = priorityScores12[secondPlace].main;
                    let winner = secondTranstornos.find(t => tiedTranstornos.includes(t));
                    if (winner) {
                        transtornoScores[winner] += 1; // Desempate!
                    } else {
                        // 5️⃣ Se ainda houver empate, usamos a ordem de prioridade fixa
                        transtornoScores[tiedTranstornos[0]] += 1; // O que apareceu primeiro vence
                    }
                }
            }
        }
    }

    // 🔹 Após calcular os transtornos, encontra o arquétipo correspondente 🔹
    let chosenArchetype = getArchetype(transtornoScores);

    // 🔹 Salva o arquétipo junto com os transtornos no localStorage 🔹
    localStorage.setItem("chosenArchetype", chosenArchetype);

    
    // 🔹 Agora salva os resultados e redireciona
    localStorage.setItem("transtornoScores", JSON.stringify(transtornoScores)); 
    window.location.href = "results.html";
}
