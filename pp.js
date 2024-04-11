
const questions = [
    {
        question: "Сколько корпусов у нашей школы?",
        optionA: "10.",
        optionB: "2.",
        optionC: "3.",
        optionD: "4.",
        correctOption: "optionC"
    },

    {
        question: "Когда начал свою деятельность 'МАОУ ЛИЦЕЙ 29'?",
        optionA: "1941.",
        optionB: "1922.",
        optionC: "1925.",
        optionD: "1994.",
        correctOption: "optionD"
    },

    {
        question: "Сколько учителей в нашей школе?",
        optionA: "5.",
        optionB: "77.",
        optionC: "110.",
        optionD: "93.",
        correctOption: "optionD"
    },

    {
        question: "Когда день рождения нашей школы?",
        optionA: "8 мая.",
        optionB: "20 января.",
        optionC: "6 апреля.",
        optionD: "1 сентября.",
        correctOption: "optionC"
    },

    {
        question: "Какой адрес у 3 коруса нашей школы?",
        optionA: "ул. Студенецкая набережная 57.",
        optionB: "ул. Астраханская 5а.",
        optionC: "ул. Советская 190.",
        optionD: "ул. Карла Маркса 167.",
        correctOption: "optionD"
    },

    {
        question: "Наш прошлый завуч?",
        optionA: "Анна Бобкова.",
        optionB: "Генерал Гавс.",
        optionC: "Алеша Попович.",
        optionD: "Владимир Пупкин.",
        correctOption: "optionA"
    },

    {
        question: "Какого внеурочного кружка нет в школе?",
        optionA: "По информатике.",
        optionB: "По химии.",
        optionC: "По физкультуре.",
        optionD: "По физике.",
        correctOption: "optionC"
    },

    {
        question: "Чем наш лицей был во время ВОВ?",
        optionA: "Госпиталь.",
        optionB: "Школа.",
        optionC: "Завод.",
        optionD: "Генеральным штабом.",
        correctOption: "optionA"
    },

    {
        question: "Наш директор?",
        optionA: "Топчий Елена Александровна.",
        optionB: "Панкова Татьяна Анатольевна.",
        optionC: "Антон Хорс.",
        optionD: "Мексичев Александр Иванович.",
        correctOption: "optionD"
    },

    {
        question: "Укажите представители каких народов чаще молятся в буддийской ступе." ,
        optionA: "Карелы, ненцы.",
        optionB: "Аварцы, даргинцы.",
        optionC: "Коряки, буряты.",
        optionD: "Калмыки, тувинцы.",
        correctOption: "optionD"
    },

    {
        question: "Укажите термин, которым обозначают рост численности городского населения в процентном отношении.",
        optionA: "Индустриализация.",
        optionB: "Глобализация.",
        optionC: "Урбанизация.",
        optionD: "Колонизация.",
        correctOption: "optionC"
    },

    {
        question: "Назовите народ проживающий в географическом центре России.",
        optionA: "Эвенки.",
        optionB: "Татары.",
        optionC: "Китайцы.",
        optionD: "Манси.",
        correctOption: "optionA"
    },


    {
        question: "Укажите города — центры одновременно деревообрабатывающей и целлюлозно-бумажной промышленности.",
        optionA: "Сыктывкар, Братск.",
        optionB: "Усть-Илимск, Лесосибирск.",
        optionC: "Архангельск, Красноярск.",
        optionD: "Новосибирск, Томск.",
        correctOption: "optionA"
    },

    {
        question: "Укажите какой народ не имеет своего автономного образования.",
        optionA: "Балкарцы.",
        optionB: "Евреи.",
        optionC: "Буряты.",
        optionD: "Корейцы.",
        correctOption: "optionD"
    },

    {
        question: "Укажите пару городов России, один из которых занимает третье место по численности в европейской части, другой третье место — в азиатской части России.",
        optionA: "Волгоград, Новосибирск.",
        optionB: "Казань, Челябинск.",
        optionC: "Самара, Томск.",
        optionD: "Рязань, Омск.",
        correctOption: "optionC"
    },

    {
        question: "Укажите республику в РФ с наименьшей плотностью населения.",
        optionA: "Якутия.",
        optionB: "Удмуртия.",
        optionC: "Калмыкия.",
        optionD: "Коми.",
        correctOption: "optionA"
    },

    {
        question: "Выберите из представленных субъектов России, тот в котором развиты все основные виды добычи топливно-энергетического комплекса.",
        optionA: "Карелия.",
        optionB: "Калининградская область.",
        optionC: "Горная Шория.",
        optionD: "Сахалинская область.",
        correctOption: "optionD"
    },
    {
        question: "Укажите государство, граничащее с Россией, в которое не проехать на автомобиле.",
        optionA: "Белоруссия.",
        optionB: "Узбекистан.",
        optionC: "Япония.",
        optionD: "Турция.",
        correctOption: "optionC"
    },

    {
        question: "Укажите страну, которая является для России соседом «второго порядка» и при этом не имеет выхода к морю.",
        optionA: "Таджикистан.",
        optionB: "Узбекистан.",
        optionC: "Армения.",
        optionD: "Польша.",
        correctOption: "optionB"
    },

    {
        question: "Укажите регионы России, где титульная нация является преобладающей.",
        optionA: "Ингушетия, Корея.",
        optionB: "Якутия, Чукотский автономный округ.",
        optionC: "Башкортостан, Марий-Эл.",
        optionD: "Чечня, Тува.",
        correctOption: "optionD"
    },

    {
        question: "В каких возрастах половозрастная пирамида в России почти симметрична.",
        optionA: "0-5 лет.",
        optionB: "65-75 лет.",
        optionC: "30-40 лет.",
        optionD: "15-25 лет.",
        correctOption: "optionC"
    },
    

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0 
let wrongAttempt = 0
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]  
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
    
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
        
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
  
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null


    if (playerScore <= 3) {
        remark = "Плохо, продолжай тренироваться."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средний результат, ты можешь больше."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично, продолжайте в том же духе."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100


    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}