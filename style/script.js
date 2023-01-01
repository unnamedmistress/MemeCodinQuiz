



const question = document.getElementById('question');
const img = document.getElementById('imgDemo');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const d = document.getElementById('d+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');
var QIndex = 0;

const quizData = [
    {
      src: "/array.png",  
      question: 'How do you sort an Array?',
      a: 'By pressing the sort button in the tool bar',
      b: 'sort();',
      c: 'Just use filter instead',
      d: 'Math.min.apply(null, [1, 2, 3])',
      correct: 'b',
    },
    {
        src: "/Classes.png",  
        question: 'What is the difference between Class and ID?',
        a: 'Class can be used by multiple HTML elements, while an ID is used by one HTML element within the page',
        b: 'A class is what you attend in school while an ID is the name tag you wear while your in class',
        c: 'While an ID can be used by multiple HTML elements, a class can only be used once',
        d: 'While Alive { eat (); sleep (); code (); I seem to have gotten lost',
        correct: 'a',
    },
    {
        src: "/closing",  
        question: 'Which tag does NOT need a closing tag',
        a: '<li>',
        b: '<HTML>',
        c: '<br>',
        d: '<p>',
        correct: 'c',
    },
    {
        src: "/float",  
        question: 'What is a common problem with using Float in CSS?',
        a: 'Float only works on an absolute or fixed position',
        b: 'You do not have any life boats if your floatation devise fails',
        c: 'The siblings of that Float will be unaffected',
        d: 'A common problem with float-based layouts is that the floats container does not want to stretch up to accommodate the floats',
        correct: 'd',
    },
    {
        src: "/function.png",  
        question: 'There is only one way to write a Function',
        a: 'True',
        b: 'False',
        correct: 'b',
    },
    {
        src: "/Git.png",  
        question: 'What is Git used for?',
        a: 'Breaking things',
        b: 'Git is just another word for Get',
        c: 'Version Control',
        d: 'Group Therapy',
        correct: 'c',
    },   {
        src: "/loop.png",  
        question: 'How many times will Barney get kicked out of Moes?',
        a: 'Whenever Moe gets tired',
        b: 'When Barney runs out of money',
        c: 'When the criteria is met, somehow',
        d: 'Indefinitely, the loop will go on forever',
        correct: 'd',
    },
    {
        src: "/nested.png",  
        question: 'What kind of Nest is this?',
        a: 'A virtual one???',
        b: 'A nested IF statement',
        c: 'A nested Function',
        d: 'Do not call it a nest, it is a HOME!',
        correct: 'b',
    },
    {
        src: "/recursion.png",  
        question: 'What is Recursion?',
        a: 'Recursion is when a function calls itself until someone stops it.',
        b: 'Recursion is when your boyfriend calls his ex, until you put a stop to it',
        c: 'Recursion is when a waitress at Olive Garden grates cheese over your pasta until someone else at the table stops it',
        d: 'Recursion is when a you keep pressing snooze on your alarm clock',
        correct: 'a',
    },
    {
        src: "/var.png",  
        question: 'Which type cannot be reassigned?',
        a: 'var',
        b: 'const',
        c: 'let',
        d: 'dum',
        correct: 'b',
    },
  ];

start = (i) => {
qDiv.textContent = questions[i].a
// loop over the questions[i].answers
// append these to the answers div
}

start(QIndex)
// write questions 
// append to html 
// create timer on click
//add score
//add question answers 














