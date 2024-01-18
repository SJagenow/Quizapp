let quiz = [
    {
        "question": 'Frage: Wofür benutzt man CSS',
        "answer_1": "<b>a)</b> CSS ist eine logische Programmiersprache.",
        "answer_2": "<b>b)</b> um ein Projekt auf github hochzuladen",
        "answer_3": "<b>c)</b> Es handelt sich dabei um eine Gestaltungs- und Formatierungssprache, mit der das Aussehen von HTML-Dokumenten bestimmt wird.",
        "answer_4": "<b>d)</b> um ein Projekt bei github zu löschen",
        "right_answer": 3
    },

    {
        "question": 'Frage: Mit welcher Tastenkombination formatiert man seinen Code?',
        "answer_1": "<b>a)</b> Alt + Z",
        "answer_2": "<b>b)</b> Alt + Shift + F",
        "answer_3": "<b>c)</b> Strg + Shift + F",
        "answer_4": "<b>d)</b> Alt + F4",
        "right_answer": 2
    },

    {
        "question": 'Frage: An welcher Stelle im Array befindet sich das "Schoko Törtchen"? Array: ["Schoko Törtchen", "Schoko Brötchen", "Schoko Cornflakes", "Schoko Kuchen"]',
        "answer_1": "<b>a)</b> 1",
        "answer_2": "<b>b)</b> 3",
        "answer_3": "<b>c)</b> 2",
        "answer_4": "<b>d)</b> 0",
        "right_answer": 4
    },

    {
        "question": 'Frage: Wie legt man eine Schleife in JavaScript an?',
        "answer_1": "<b>a)</b> for (i = 0; i < array.length; i++){Schleifeninhalt}",
        "answer_2": "<b>b)</b> for i=0; i <length.array; i++ {Schleifeninhalt}",
        "answer_3": "<b>c)</b> for (let i = 0; i < array.length; i++){Schleifeninhalt}",
        "answer_4": "<b>d)</b> for i=0 i < array.length i=+",
        "right_answer": 3
    },

    {
        "question": 'Welche Methode wird verwendet, um den Wert einer Variable in der Konsole anzuzeigen?',
        "answer_1": '<b>a)</b> print(myVariable);',
        "answer_2": '<b>b)</b> log(myVariable);',
        "answer_3": '<b>c)</b> display(myVariable);',
        "answer_4": '<b>d)</b> console.log(myVariable);',
        "right_answer": 4
    },

    {
        "question": 'Frage: Welche JavaScript-Methode wird verwendet, um ein neues Element am Ende eines Arrays hinzuzufügen?',
        "answer_1": '<b>a)</b> append()',
        "answer_2": '<b>b)</b> push()',
        "answer_3": '<b>c)</b> addToEnd()',
        "answer_4": '<b>d)</b> attach()',
        "right_answer": 2
    },

    {
        "question": 'Frage: Wie greift man auf ein HTML-Element mit JavaScript zu?',
        "answer_1": '<b>a)</b> element = document.getElement("elementId");',
        "answer_2": '<b>b)</b> const element = document.getElementById("elementId");',
        "answer_3": '<b>c)</b> const element = get.elementByclass("elementId");',
        "answer_4": '<b>d)</b> const element = get.elementByIdsrc("elementId");',
        "right_answer": 2
    },

    {
        "question": 'Frage: Wie greift man auf den Wert "World" im folgenden JavaScript-Objekt zu: let greetings = { hello: "Hello", world: "World" }?',
        "answer_1": '<b>a)</b> greetings[0];',
        "answer_2": '<b>b)</b> greetings.world;',
        "answer_3": '<b>c)</b> greetings["World"];',
        "answer_4": '<b>d)</b> greetings.get("world");',
        "right_answer": 2
    },

    {
        "question": 'Frage: Wie kann man einen Wert im Local Storage in JavaScript speichern?',
        "answer_1": '<b>a)</b> localStorage.saveItem("key", "value");',
        "answer_2": '<b>b)</b> localStorage.setItem("key", "value");',
        "answer_3": '<b>d)</b> localStorage.add("key", "value");',
        "answer_4": '<b>d)</b> localStorage.update("key", "value");',
        "right_answer": 2
    },

    {
        "question": 'Frage: Schreibe eine JavaScript-Funktion, die zwei Zahlen als Parameter nimmt und die Summe dieser Zahlen zurückgibt.',
        "answer_1": '<b>a)</b> function add(a, b) { return a - b; }',
        "answer_2": '<b>b)</b> function add(a, b) { return a * b; }',
        "answer_3": '<b>c)</b> function add[a, b] { return a + b; }',
        "answer_4": '<b>d)</b> function add(a, b) { return a + b; }',
        "right_answer": 4
    },

    {
        "question": 'Frage: Was bewirkt die CSS-Media-Query @media(max-width: 1200px)?',
        "answer_1": '<b>a)</b> Stellt sicher, dass die Styles nur auf Bildschirmen mit einer Breite von genau 1200 Pixeln angewendet werden.',
        "answer_2": '<b>b)</b> Sorgt dafür, dass die Styles nur auf Bildschirmen mit einer Breite von höchstens 1200 Pixeln angewendet werden.',
        "answer_3": '<b>c)</b> Legt die Styles fest, die auf Bildschirmen mit einer Breite von mindestens 1200 Pixeln angewendet werden sollen.',
        "answer_4": '<b>d)</b> Definiert Styles, die auf Bildschirmen mit jeder Breite angewendet werden sollen.',
        "right_answer": 2
    },

    {
        "question": 'Frage: Erkläre den Begriff "Event Loop" in JavaScript und wie er mit asynchronem Code und Callback-Funktionen zusammenhängt',
        "answer_1": '<b>a)</b> Der Event Loop ermöglicht die nahtlose Integration von synchronem und asynchronem Code, indem er Callback-Funktionen verwaltet.',
        "answer_2": '<b>b)</b> Der Event Loop ist serverseitig nicht relevant, da er sich auf die Verarbeitung von HTTP-Anfragen bezieht.',
        "answer_3": '<b>c)</b> Der Event Loop ist entscheidend für die Ausführung von asynchronem Code in JavaScript.',
        "answer_4": '<b>d)</b> Der Event Loop ist eine Schleife, die Callback-Funktionen steuert und asynchronen Code in einer Warteschlange organisiert.',
        "right_answer": 4
    },

    {
        "question": 'Frage: Wenn Rick von Rick and Morty ein Computerprogrammierer wäre, welche Schleife würde er am liebsten verwenden und warum?',

        "answer_1": '<b>a)</b> Schleifpapier?',
        "answer_2": '<b>b)</b> Haarschleifen? ',
        "answer_3": '<b>c)</b> Elfen?',
        "answer_4": '<b>d)</b> Die "Time-Traveling Loop", um Code in der Vergangenheit zu optimieren, bevor er geschrieben wird. und  Die "Interdimensional Loop", um Code zwischen verschiedenen Realitäten zu verschachteln.',
        "right_answer": 4
        
    },

];

let rightQuestions = 0;


let currentQuestion = 0;

function start() {
    document.getElementById('all-questions').innerHTML = quiz.length;

    showQuiz();
}


function showQuiz() {
    
    if(currentQuestion >= quiz.length){
    
    document.getElementById('endScreen').style = 'font-size:40px';
    document.getElementById('quizBody').style ='display: none'; 

    document.getElementById('amount-of-Questions').innerHTML = quiz.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    }else{
    let question = quiz[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = quiz[currentQuestion];

    console.log('selected answer is', selection);
    let selecteddQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selecteddQuestionNumber);
    console.log('current question is', question['right_answer']);

   let idofRightAnswer = `answer_${question['right_answer']}` ;


    if (selecteddQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;

    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idofRightAnswer).classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        
    }
    document.getElementById('next-Button').disabled = false;
}


function nextQuestion(){
    currentQuestion++; //z.B von 0 auf 1
    document.getElementById('next-Button').disabled = true;
    showQuiz();
    resetAnswerButtons()

}



function resetAnswerButtons()  {

    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');



}
