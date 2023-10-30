// import { createBragPost } from '../Back_End/scripts/entry.js'

//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button")[0];

// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}
function changeToJournal() {
  // Use window.location to navigate to the desired page
  window.location.href = "./journal.html";
}

// Event listeners
backButton.addEventListener("click", changeToHomePage);

// make journal interactive to write things in the box to save it to database
// declare vairable
// import create post

const messageInput = document.getElementById("Message");
const saveButton = document.getElementById("footerRantSaveItButton");

saveButton.addEventListener("mousedown", async () => {
  console.log("clicked");
  // Get message from input field
  const message = messageInput.value;
  //const message = "test message"

  const postObject = {
    entry_type: "rant",
    post: message,
  };

  await fetch("/journal/", {
    method: "POST", // Specify the HTTP method
    headers: {
      "Content-Type": "application/json", // Specify that you're sending JSON data
    },
    body: JSON.stringify(postObject), // Convert your JSON object to a string and send it
  });
});
saveButton.addEventListener("mouseup", changeToJournal);
