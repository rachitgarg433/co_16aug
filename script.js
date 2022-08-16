const quiz = [
    {
        question: "What is the full form of CPU?",
        a: 'Computer Processing Unit',
        b: 'Computer Principle Unit',
        c: 'Central Processing Unit',
        d: 'Control Processing Unit',
        ans: "ans3"
    },
    {
        question: "Which of the following computer language is written in binary codes only?",
        a: 'pascal',
        b: 'machine language',
        c: ' C',
        d: 'C#',
        ans: "ans2"
    },
    {
        question: "Which of the following is the brain of the computer?",
        a: 'Central Processing Unit',
        b: ' Memory',
        c: 'Arithmetic and Logic unit',
        d: 'Control unit',
        ans: "ans1"
    },
    {
        question: "Which of the following is not a characteristic of a computer?",
        a: 'Versatility',
        b: ' Accuracy',
        c: 'Diligence',
        d: 'I.Q.',
        ans: "ans4"
    },
];

const question = document.querySelector('.Question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionlist = quiz[questionCount];
    question.innerHTML = questionlist.question
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

loadQuestion();

const getcheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        // return answer;
    })
    return answer;

}
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

function validateTime() {
    alert("Exam Has Ended")
}

function showTimer() {
    let time = 300
    let interval = setInterval(() => {
        time -= 1;
        let min = parseInt(time / 60)
        let second = time % 60
        element.innerHTML = min + ":" + second;
        if (time == -1) {
            validateTime()
        }
    }, 1000)
    // clearInterval(interval)
}

const element = document.getElementById("timer")
showTimer()
submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    // console.log(checkedAnswer)
    if(checkedAnswer === quiz[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll()
    if(questionCount<quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
         <h3> you scored ${score}/${quiz.length} Done </h3>
         <button class = "btn" onclick = "location.reload()">Play again </button>
        `;

        showScore.classList.remove('scoreArea');
    }

})