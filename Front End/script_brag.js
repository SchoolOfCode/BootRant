import { createBragPost } from '../Back_End/scripts/entry.js'

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

const messageInput= document.getElementById("Message");
const saveButton= document.getElementById("footerSaveItButton");

saveButton.addEventListener('click', async () => {
  // Get message from input field
  const message = messageInput.value;

  //Check message is empty
  if (message.trim() == '') {
    alert('Please enter a message before saving.');
  } else {
    // Call createBragPost function to save the message to the database
    try {
      const journal = { post: message };
      const createdBrag = await createBragPost(journal);

      // Display success message or handle as needed
      console.log('Brag entry added successfully:', createdBrag);
    } catch (error) {
      // Handle any errors that occur during database insertion
      console.error('Error adding brag entry:', error);
    }
  }
  // // create data object to send as JSON 
  //   const data = {message};

  // // Send a POST request to your server
  // createBragPost(message);
  // clear input field
  messageInput.value = '';
  }

)
