const quizQues = [
    { question: "Whos the PM of India?", answer: "Narendra Modi"},
    { question: "Whats the fullform of VIP?", answer: "Very important person"},
    { question: "Whats the extention for javascript?", answer: "js"},
];

function quiz(){
    let score=0;


    for (let i=0; i < quizQues.length ; i++) {
        const userAnswer= prompt(quizQues[i].question)

        if (userAnswer && userAnswer.toLowerCase().trim() === quizQues[i].answer.toLowerCase().trim()) {
            score += 1;
            alert("correct Answer");
        } else {
            alert(`Wrong Answer the correct answer was ${quizQues[i].answer}`)
        };
    };

    alert(`Over! Your score was ${score} out of ${quizQues.length}`);
};

quiz()