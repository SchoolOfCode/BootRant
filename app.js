// Import the required modules
import express from "express";
import morgan from "morgan";

//importing the requests
import { getJournalEntries, createPost } from "./Back_End/scripts/entry.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests
app.use(express.static("Front End"));
app.get("/journal/", async function (req, res) {
  const entry = await getJournalEntries();
  console.log("Did I get the date?");
  res.status(200).json({ status: "success", data: entry });
});

app.post("/journal/", async function (req, res) {
  const data = req.body;
  const entry = await createPost(data);
  res.status(201).json({ status: "success", data: entry });
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
