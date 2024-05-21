let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];


let currentQuestion = 0;
let score = 0;

let questionElement = document.getElementById('question');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');

let scoreElement = document.getElementById('score');
let progressText = document.getElementById('progressText');

dipslayQuestion = () => {
    let question = questions[currentQuestion];
    questionElement.innerText = question.question;
    choice1.innerText = question.choice1;
    choice2.innerText = question.choice2;
    choice3.innerText = question.choice3;
    choice4.innerText = question.choice4;
}

