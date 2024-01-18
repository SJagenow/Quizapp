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
        "question": 'Frage: Wie fügt man ein Bild in eine HTML-Seite ein?',
        "answer_1": '<b>a)</b> <impic src="bild.jpg" alt="Beschreibung des Bildes">',
        "answer_2": '<b>b)</b> <pic src="bild.jpg" alt="Beschreibung des Bildes">',
        "answer_3": '<b>c)</b> <img s="bild" alt="Beschreibung des Bildes">',
        "answer_4": '<b>d)</b> <img src="bild.jpg" alt="Beschreibung des Bildes">',
        "right_answer": 4
    },

    {
        "question": 'Frage: Wie erstellt man einen Link in HTML?',
        "answer_1": '<b>a)</b> <links ursula="https://www.example.com">Linktext</link>',
        "answer_2": '<b>b)</b> <async s="https://www.example.com">Linktext</a>',
        "answer_3": '<b>c)</b> <a href="https://www.example.com">Linktext</a>',
        "answer_4": '<b>d)</b> a hef=https://www.example.com>Linktext/a',
        "right_answer": 3
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
        "question": 'Frage: Wofür ist die map()-Methode in JavaScript hauptsächlich verwendet?',
        "anwser_1": '<b>a)</b>  Um neue Elemente am Ende eines Arrays anzuhängen.',
        "anwser_2": '<b>b)</b> Um eine Kopie eines Arrays zu erstellen.',
        "answer_3": '<b>c)</b> Um eine Funktion auf jedes Element in einem Array anzuwenden und ein neues Array der Ergebnisse zu erstellen.',
        "answer_4": '<b>d)</b> Um ein Element an einer bestimmten Position im Array zu löschen.',
        "right_answer": 3
    },

    {
        "question": 'Frage: Schreibe eine JavaScript-Funktion, die zwei Zahlen als Parameter nimmt und die Summe dieser Zahlen zurückgibt.',
        "anwser_1": '<b>a)</b> function add(a, b) { return a - b; }',
        "anwser_2": '<b>b)</b> function add(a, b) { return a * b; }',
        "answer_3": '<b>c)</b> function add[a, b] { return a + b; }',
        "answer_4": '<b>d)</b> function add(a, b) { return a + b; }',
        "right_answer": 4
    },

    {
        "question": 'Frage: Was bewirkt die CSS-Media-Query @media(max-width: 1200px)?',
        "anwser_1": '<b>a)</b> Stellt sicher, dass die Styles nur auf Bildschirmen mit einer Breite von genau 1200 Pixeln angewendet werden.',
        "anwser_2": '<b>b)</b> Sorgt dafür, dass die Styles nur auf Bildschirmen mit einer Breite von höchstens 1200 Pixeln angewendet werden.',
        "answer_3": '<b>c)</b> Legt die Styles fest, die auf Bildschirmen mit einer Breite von mindestens 1200 Pixeln angewendet werden sollen.',
        "answer_4": '<b>d)</b> Definiert Styles, die auf Bildschirmen mit jeder Breite angewendet werden sollen.',
        "right_answer": 2
    },

    {
        "question": 'Frage: Erkläre den Begriff "Event Loop" in JavaScript und wie er mit asynchronem Code und Callback-Funktionen zusammenhängt',
        "anwser_1": '<b>a)</b> Der Event Loop ermöglicht die nahtlose Integration von synchronem und asynchronem Code, indem er Callback-Funktionen verwaltet.',
        "anwser_2": '<b>b)</b> Der Event Loop ist serverseitig nicht relevant, da er sich auf die Verarbeitung von HTTP-Anfragen bezieht.',
        "answer_3": '<b>c)</b> Der Event Loop ist entscheidend für die Ausführung von asynchronem Code in JavaScript.',
        "answer_4": '<b>d)</b> Der Event Loop ist eine Schleife, die Callback-Funktionen steuert und asynchronen Code in einer Warteschlange organisiert.',
        "right_answer": 4
    },

    {
        "question": 'Frage: Wenn Rick von Rick and Morty ein Computerprogrammierer wäre, welche Schleife würde er am liebsten verwenden und warum?  2 antworten möglich',
        
        "anwser_1": '<b>a)</b> u-Boot',
        "anwser_2": '<b>b)</b> Die "Interdimensional Loop", um Code zwischen verschiedenen Realitäten zu verschachteln.',
        "answer_3": '<b>c)</b> Elfen?',
        "answer_4": '<b>d)</b> Die "Time-Traveling Loop", um Code in der Vergangenheit zu optimieren, bevor er geschrieben wird.',
        "right_answer":2/4
    },

];

let currentQuestion = 0;

function start(){
    document.getElementById('all-questions').innerHTML = quiz.length;

    showQuiz();
}


function showQuiz() {
    let question = quiz[currentQuestion];
  
    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answer-one').innerHTML = question['answer_1'];
    document.getElementById('answer-two').innerHTML = question['answer_2'];
    document.getElementById('answer-tree').innerHTML = question['answer_3'];
    document.getElementById('answer-four').innerHTML = question['answer_4'];
}


function answer(selection){
let question = quiz[currentQuestion];

console.log('selected answer is', selection);
let selecteddQuestionNumber = selection.slice(-1);
console.log('selectedQuestionNumber is',selecteddQuestionNumber );
console.log('current question is', question['right_answer'] );

if(selecteddQuestionNumber == question['right_answer']) {
    console.log('Richtige Antwort!!');
  document.getElementById(selection).classList.add('bg-success');
}else{
    console.log('Falsche Antwort!!');
}
}

