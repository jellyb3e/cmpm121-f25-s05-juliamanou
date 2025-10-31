// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementText = "increment",
  counterText = "counter",
  headerText = "CMPM 121 Project";

function setup() {
  createHTML();

  // Get the increment button element from the document
  const incButton = document.getElementById(incrementText);
  // Get the decrement button element from the document
  const decButton = document.getElementById("dec");
  // Get the reset button element from the document
  const resetButton = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(counterText);

  // Check if any element is missing, then exit the function
  if (!incButton || !decButton || !resetButton || !ctr) return;

  // Add click event to the increment button
  incButton.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;
    refreshDisplay(ctr);
  });

  // Add click event to the decrement button
  decButton.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;
    refreshDisplay(ctr);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    counter = 0;
    refreshDisplay(ctr);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}

function createHTML() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headerText}</h1>
    <p>Counter: <span id="${counterText}">0</span></p>
    <button id="${incrementText}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

function refreshDisplay(ctr: HTMLElement) {
  // Update the counter display
  ctr.innerHTML = `${counter}`;
  // Update the document title
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = getColor();
}

function getColor() {
  return counter % 2 ? "pink" : "lightblue";
}

// Start the counter app
start();
