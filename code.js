//Игра кто хочет стать миллионером

/* Необходимые функции
1. функция Играть, пока играется (до первоей ошибки или пока есть вопросы).
2. Функция преобразования вопроса из объекта genereteQuestion().
3. функция проверки правильности ответов check()  */

var QUESTIONS = [
    {
        number : 1,
        text : 'Какая столица США?',
        answers : ['Москва', 'Лондон', 'Вашингтон', 'Изумрудный город'],
        correct : 3,
    },
    {
        number : 2,
        text : 'Cколько будет 2 + 2 ????',
        answers : ['4', '3', 'Я не знаю', '22'],
        correct : 1,
    },
    {
        number : 3,
        text : 'В какой день крепостной мог перейти от одних господ к другим?',
        answers : ['В Пасху', 'В Юрьев день', '8 марта', '1 июня'],
        correct : 2,
    },
    {
        number : 4,
        text : 'Какое животное было изображено на первых монетах',
        answers : ['Скунс', 'Лев', 'Муравей', 'Медведев'],
        correct : 2,
    },
    {
        number : 5,
        text : 'Назовите военный головной убор - русское изобретение',
        answers : ['Кепка', 'Шляпа', 'Фуражка', 'Панама'],
        correct : 3,
    },
];


//Функция самой игры

var game = function(mas) {
    console.log(mas);
    let round = 0;
    let play = true;
    
    while(play == true && round < mas.length) {
         //генерируем переменную каждый раз обработка
        let question = generateQuestion(mas, round);
        let answers = prompt(question.questionText);
        play = check (answers, round);
        round++;

        if  (round == mas.length) {
            alert('Вы ответили правильно на все вопросы! Поздравляем! Вы выиграли миллион');
        }

    }
};

var generateQuestion = function (mas, round) {
    let answers = '';
    for (let i = 0; i < 4; i++) {
        answers = answers + (i + 1) + ' - ' + mas[round].answers[i] + '\n';
    }
    let text = mas[round].text + '\n';
    let correctAnswer = mas[round].correct;

    return {
        questionText: 'Вопрос № ' + ++round + '\n' + ' Введите цифру с правильным ответом' + '\n' + text + answers,
        rightAnswer: correctAnswer
    }
};

var check = function (answer, round) {
    if (answer == QUESTIONS[round].correct) {
        alert('Вы ответили правильно на вопросы ' + '\n' + ++round);
        return true;
    } else {
        alert(':( Вы проиграли ' + '\n' + 'Количество правильных ответов =  ' + round + 
         '\n' + 'Правильный ответ №' + QUESTIONS[round].correct + '\n' + QUESTIONS[round].answers[(QUESTIONS[round].correct)-1]);
        return false;
    }
    
};

game (QUESTIONS);
