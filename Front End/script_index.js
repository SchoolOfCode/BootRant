//creating variable to select the buttons

const bragButton = document.getElementById("bragButton");
const rantButton = document.getElementById("rantButton");
const seeJournal = document.getElementById("seeJournalButton");

// create a function to change from index.html to other .htmls

function changeToJournal() {
  // Use window.location to navigate to the desired page
  window.location.href = "./journal.html";
}
function changeToAddBrag() {
  // Use window.location to navigate to the desired page
  window.location.href = "./brag-input.html";
}
function changeToAddRant() {
  // Use window.location to navigate to the desired page
  window.location.href = "./rant-input.html";
}

// Event listeners
bragButton.addEventListener("click", changeToAddBrag);
rantButton.addEventListener("click", changeToAddRant);
seeJournal.addEventListener("click", changeToJournal);
