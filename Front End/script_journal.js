//import { getDate } from "../Back_End/scripts/entry.js";

//creating variable to select the buttons
const backButton = document.getElementsByClassName("back-button")[0];
const bragButton = document.getElementById("bragButton");
const rantButton = document.getElementById("rantButton");
const journalEntry = document.getElementsByClassName("journalEntries")[0];
// create a function to change from index.html to other .htmls
function changeToHomePage() {
  // Use window.location to navigate to the desired page
  window.location.href = "./index.html";
}
function changeToAddBrag() {
  window.location.href = "./brag.html";
}
function changeToAddRant() {
  window.location.href = "./rant.html";
}
// Event listeners
backButton.addEventListener("click", changeToHomePage);
//bragButton.addEventListener("click", changeToAddBrag);
//rantButton.addEventListener("click", changeToAddRant);

//call journal with api
//insert enteries
async function retrieveJournal() {
  const response = await fetch("/journal/", {});
  // Check if the response failed, and if so log an error and halt the app

  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // return the parsed JSON from the response
  const data = await response.json();
  console.log(data);
  return data;
}

// On Load populate page with all existing database entries
//On load part
window.onload = popDom;

async function popDom() {
  // GET request and stores the values
  const payloadObject = await retrieveJournal();
  console.log("PayloadObject recieved");
  console.log(`PayloadObject is type of ${typeof payloadObject}`);
  console.log(payloadObject);
  const payload = payloadObject.data;
  console.log("Payload recieved");
  console.log(`Payload is an Array ${Array.isArray(payload)}`);
  console.log(payload);
  console.log(`Payload has ${payload.length} entries`);

  // loop thru payload
  for (let i = 0; i < payload.length; i++) {
    // check if the enty is brag or rant
    // if Rant create a Rant card
    if (payload[i].entry_type == "rant") {
      console.log(`Entry num: ${i} is type rant `);
      createRantCard(payload[i].post, payload[i].date);
    } else {
      // if Brag create a brag card
      console.log(`Entry num: ${i} is type brag`);
      //createBragCard(payload[i].post, payload[i].date)
    }
  }
}

// Rant card function
function createRantCard(postString, postDate) {
  console.log(`post string is ${postString}`);
  console.log(`post date is ${postDate}`);
  // trim postDate to just the date chars
  const postDateTrim = postDate.slice(0, 10)
  // append text-icon into card (contains skull icon and the date)
  // Make card
  const card = document.createElement("div");
  // Give the card the class of bragg.card
  card.classList.add("rant-card");
  //Make the text icon div with class of text-icon
  const textIcon = document.createElement("div");
  textIcon.classList.add("text-icon");
  //Make an image of skull class of card-icon
  const cardIcon = document.createElement("img");
  cardIcon.classList.add("card-icon");
  cardIcon.src = "./assets/skull.svg";
  //Make the p element class of post
  const post = document.createElement("p");
  post.classList.add("post");
  post.innerHTML = postString
  //Make a  div with class card-date
  const cardDate = document.createElement("div");
  cardDate.classList.add("card-date");
  //Make an image of calander with class of cal-logo
  const dateImage = document.createElement("img");
  dateImage.src = "./assets/calendar.svg";
  dateImage.classList.add("cal-logo");
  // p element with e class of date.
  const date = document.createElement("p");
  date.classList.add("date");
  date.innerHTML = postDateTrim;
  // append card-date into card (contains the calendar icon and the date)
  // card date needs the following children
  // append calendar icon
  cardDate.appendChild(dateImage);
  // append p element
  cardDate.appendChild(date);
  // text icon needs the following children
  //append the card icon image
  textIcon.appendChild(cardIcon);
  //append p element
  textIcon.appendChild(post);
  // rant card needs the following children
  // text icon
  card.appendChild(textIcon);
  // append card date
  card.appendChild(cardDate);
  // append card child into journal Entries
  journalEntry.appendChild(card);
}

// Brag card function
