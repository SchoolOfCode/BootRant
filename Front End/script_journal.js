//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button")[0];
const bragButton = document.getElementsByClassName("footerBragButton")[0];
const rantButton = document.getElementById("rantButton");

// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}
function changeToAddBrag() {
  window.location.href = "./brag-input.html";
}
function changeToAddRant() {
  window.location.href = "./rant.html";
}
// Event listeners
backButton.addEventListener("click", changeToHomePage);
bragButton.addEventListener("click", changeToAddBrag);
rantButton.addEventListener("click", changeToAddRant);

//call journal with api
//insert enteries
// async function retrieveJournal() {
// const response = await fetch("http://localhost:3000/", {
// headers: {
// Accept: "application/json",
// },
// });
//   // Check if the response failed, and if so log an error and halt the app
//   if (!response.ok) {
//     console.error(`Status: ${response.status}`);
//     console.error(`Text: ${await response.text()}`);
//     return;
//     }

// // return the parsed JSON from the response 
//     const data = await response.json();
// return data;
//     }


