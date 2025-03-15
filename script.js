function submitQuiz() {
    saveAnswer();

    let transtornoScores = {
        t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, 
        t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
    };

    const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

    // Ignorar apenas a pergunta 2 do frontend (índice 1 no array) e a pergunta 9 (índice 8 no array)
    const questionsToScore = questions.filter((q, index) => 
        index !== 1 && index !== 8
    );

    questionsToScore.forEach((question, index) => {
        let frontendIndex = index + 1; // Ajusta para a numeração do frontend (1 a 10)
        let answer = savedAnswers[frontendIndex]; 
        if (answer) {
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
