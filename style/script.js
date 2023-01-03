
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
const quizArray = [
    {
      id:"0",  
      src: "style/img/array.png",  
      question: 'How do you sort an Array?',
      options:['By pressing the sort button in the tool bar','sort()','Just use filter instead','Math.min.apply(null, [1, 2, 3])'],
      correct: 'sort();',
    },
    {
        id:"1", 
        src: "style/img/Classes.png",  
        question: 'What is the difference between Class and ID?',
        options: ['Class can be used by multiple HTML elements, while an ID is used by one HTML element within the page', 'A class is what you attend in school while an ID is the name tag you wear while your in class','While an ID can be used by multiple HTML elements, a class can only be used once', 'While Alive { eat (); sleep (); code (); I seem to have gotten lost'],
        correct: 'Class can be used by multiple HTML elements, while an ID is used by one HTML element within the page',
    },
    {
        id:"2",
        src: "style/img/closing",  
        question: 'Which tag does NOT need a closing tag',
        options:[ '<li>','<HTML>','<br>','<p>'],
        correct: '<li>',
    },
    {   id:"3",
        src: "style/img/float",  
        question: 'What is a common problem with using Float in CSS?',
        options:[ 'Float only works on an absolute or fixed position','You do not have any life boats if your floatation devise fails','The siblings of that Float will be unaffected','A common problem with float-based layouts is that the floats container does not want to stretch up to accommodate the floats'],
        correct: 'A common problem with float-based layouts is that the floats container does not want to stretch up to accommodate the floats',
    },
    {   id:"4",
        src: "style/img/function.png",  
        question: 'There is only one way to write a Function',
        options: ['True','False'],
        correct: 'False',
    },
    {   id:"5",
        src: "style/img/Git.png",  
        question: 'What is Git used for?',
        options: ['Breaking things', 'Git is just another word for Get','Version Control','Group Therapy'],
        correct: 'Version Control',
    },  
    {   id:"6",
        src: "style/img/loop.png",  
        question: 'How many times will Barney get kicked out of Moes?',
       options:['Whenever Moe gets tired','When Barney runs out of money','When the criteria is met, somehow','Indefinitely, the loop will go on forever'],
        correct: 'Indefinitely, the loop will go on forever',
    },
   
 ];
 
//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });
  //Next Button
  nextBtn.addEventListener(
    "click",
    (displayNext = () => {
      //increment questionCount
      questionCount += 1;
      //if last question
      if (questionCount == quizArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
          "Your score is " + scoreCount + " out of " + questionCount;
      } else {
        //display questionCount
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + quizArray.length + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
      }
    })
  );
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timeLeft.innerHTML = `${count}s`;
      if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 1000);
  };
  //Display quiz
  const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
      card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
  };
  //Quiz Creation
  function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
      //randomly sort options
      i.options.sort(() => Math.random() - 0.5);
      //quiz card creation
      let div = document.createElement("div");
      div.classList.add("container-mid", "hide");
      //question number
      countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
      //question
      let question_DIV = document.createElement("p");
      question_DIV.classList.add("question");
      question_DIV.innerHTML = i.question;
      question_DIV.innerHTML = `<img src=${i.src} alt="picture" width = "200px" height="200px" />`;
      div.appendChild(question_DIV);
      //options
      div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
         <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
      `;
      quizContainer.appendChild(div);
    }
  }
  //Checker Function to check if option is correct or not
  function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
      document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      //For marking the correct option
      options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
          element.classList.add("correct");
        }
      });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
      element.disabled = true;
    });
  }
  //initial setup
  function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
  }
  //when user click on start button
  startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
  });
  //hide quiz and display start screen
  window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
  };