let redo = document.getElementById("restar");
let scores = document.getElementsByClassName("high-scoreDiv");
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var storedScores = [];
redo.addEventListener("click", function openHighScores() {
    window.location = "index.html";
    window.location.href = "index.html";
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

const urlParams = new URLSearchParams(window.location.search);
// Get the score count from the URL parameters
const score = urlParams.get('score');
scores.innerHTML = `Your score is ${score}`;

function renderstoredScores() {
    // Clear todoList element and update scoreCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = storedScores.length;

    // Render a new li for each score
    for (var i = 0; i < storedScores.length; i++) {
        var todo = storedScores[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = ` You have a score of ${score}   ✔️`;

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

// This function is being called below and will run when the
// page loads.
function init() {
    // Get stored storedScores from localStorage
    var storedstoredScores = JSON.parse(localStorage.getItem("storedScores"));
    var storedCurrent= JSON.parse(localStorage.getItem("score"));

    // If storedScores were retrieved from localStorage, update the storedScores array to it
    if (storedstoredScores !== null) {
        storedScores = storedstoredScores;
    }

    // This is a helper function that will render storedScores to the DOM
    renderstoredScores();
}

function storestoredScores() {
    // Stringify and set key in localStorage to storedScores array
    localStorage.setItem("storedScores", JSON.stringify(storedScores));
    localStorage.setItem("score", JSON.stringify(storedCurrent));

}

// Add submit event to form
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }

    // Add new todoText to storedScores array, clear the input
    storedScores.push(`${todoText} `);
    todoInput.value = "";

    // Store updated storedScores in localStorage, re-render the list
    storestoredScores();
    renderstoredScores();
});

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
    var element = event.target;

    // Checks if element is a button
    if (element.matches("button") === true) {
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        storedScores.splice(index, 1);

        // Store updated storedScores in localStorage, re-render the list
        storestoredScores();
        renderstoredScores();
    }
});

// Calls init to retrieve data and render it to the page on load
init()