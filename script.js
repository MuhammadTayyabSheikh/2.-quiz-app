const quizData = [
    {
        question: 'How old is Tayyab?',
        a: '10',
        b: '17',
        c: '20',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2021?',
        a: 'Python',
        b: 'C',
        c: 'Java',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'Barack Obama',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript was launched?',
        a: '1996',
        b: '1994',
        c: '1999',
        d: 'none of the above',
        correct: 'd'
    }

];
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');

const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {


    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct)
            score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = (`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onClick=location.reload()>Reload</button>`);
        }
    }
});