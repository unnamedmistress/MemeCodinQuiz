let redo = document.getElementById("restar");
let div = document.getElementsByClassName("high-scoreDiv");
let scores = document.getElementById('high-score');

redo.addEventListener("click", function openHighScores(){
    window.location="/index.html";
    window.location.href = "/index.html"; initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

const urlParams = new URLSearchParams(window.location.search);
// Get the score count from the URL parameters
const score = urlParams.get('score');
// Display the score count on the page
document.getElementById('high-score').innerHTML ="Your score is " + score + " out of 7"; 

function clearTextBox() {
    // Get the value of the text box
    const textBoxValue = document.getElementById('t1').value;

    // Store the text box value and score in local storage
    localStorage.setItem('textBoxValue', textBoxValue);
    localStorage.setItem('score', score);

    document.getElementById('t1').value = '';
    document.getElementById('t1').style.display = 'none';
   
}

document.getElementById('t1').onsubmit = clearTextBox; 

const storeScore = localStorage.getItem('score');
const nameValue = localStorage.getItem('textBoxValue');

// add to page
  scores.innerHTML = `Your score is ${storeScore} out of 7. Your name is ${nameValue}`;