const questions = [
    {
        question: "Which is largest animal in the world",
        Answers:[
            {text: "Shark", correct: false},
            {text: "Elephant", correct: true},
            {text: "bluewhale", correct: false},
            {text: "Giraffe", correct: false},

        ]

    },
    {
        question: "Which is the smallest continent in the world",
        Answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},

        ]

    },
    {
    question: "Which is the largest desert in the world",
    Answers:[
        {text: "kalahari", correct: false},
        {text: "Gobi", correct: true},
        {text: "Sahara", correct: false},
        {text: "Antartica", correct: true},

    ]
},
{
    question: "Which is the smallest country in the world",
    Answers:[
        {text: "Vatican City", correct: true},
        {text: "Bhutan", correct:false},
        {text: "Nepal", correct: false},
        {text: "Shri Lanka", correct: false},

    ]
}
];

const question = document.getElementById('question')
const answersButton = document.getElementById('answer-buttons')
const next = document.getElementById('next-button')

let current_index = 0;
let score = 0;

function startQuiz(){
    current_index =0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[current_index];
    let questionNo = current_index+1;
    question.innerHTML = questionNo + ". "  + currentQuestion.question;

    currentQuestion.Answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML= answers.text;
        button.classList.add('btn')
        answersButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAns);
    })
}
function resetState(){
    next.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}
function selectAns(e){
    const selectionBtn = e.target;
    const iscorrect = selectionBtn.dataset.correct ==="true";
    if(iscorrect){
        selectionBtn.classList.add('correct')
        score++;
    }
    else{
        selectionBtn.classList.add("incorrect")
    }

    Array.from(answersButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    next.style.display = "block"
}


function showScore(){
    resetState();
    question.innerHTML = `You scored${score} out of ${questions.length}!`
}

function handelNextButton(){
    current_index++;
    if(current_index<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



next.addEventListener('click', ()=> {
    if(current_index< questions.length){
        handelNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
 