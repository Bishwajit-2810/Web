document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "Berlin", "Madrid", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which language runs in a web browser?",
            choices: ["Python", "C", "Java", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What does CSS stand for?",
            choices: [
                "Central Style Sheets",
                "Cascading Style Sheets",
                "Cascading Simple Sheets",
                "Cars SUVs Sailboats"
            ],
            answer: "Cascading Style Sheets"
        }
    ];

    const startBtn = document.getElementById('start-btn')
    const restartBtn = document.getElementById('restart-btn')
    const nextBtn = document.getElementById('next-btn')
    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const choiceList = document.getElementById('choice-list')
    const resultContainer = document.getElementById('result-container')
    const scoreDisplay = document.getElementById('score')

    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        } else {
            showResult()
        }
    })
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add("hidden")
        startQuiz()
    })

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question
        choiceList.innerHTML = ''
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choiceList.append(li)
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer
        if (correctAnswer === choice) {
            score++
        }
        nextBtn.classList.remove('hidden')
    }

    function showResult() {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }

})