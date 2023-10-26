import {createPost} from '../Back_End/scrpit/entry.js/'

//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button")[0];


// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}

// Event listeners
backButton.addEventListener("click", changeToHomePage);


// make journal interactive to write things in the box to save it to database
// declare vairable
// import create post

const messageInput= document.getElementsByName("Message");
const BoxMessage= messageInput.values;
const saveButton= document.getElementsByClassName("footerSaveItButton");

function saveToDb () {
 
}
