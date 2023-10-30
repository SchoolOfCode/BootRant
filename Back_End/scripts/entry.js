// Import the pool for the database
import { pool } from "./index.js";

//Get entry feature

export async function getJournalEntries() {
  // fetch entry from the journal table
  const queryText = "SELECT * FROM journal";

  // use the pool to send to database
  const result = await pool.query(queryText);

  //return results
  return result.rows;
}

// post entry feature
export async function createPost(journal) {
  // Query the database to create a post and return the newly created post
  // Define the SQL query to create the post with mainEntry, date
  const queryText =
    "INSERT INTO Journal (entry_type, post, date ) VALUES ($1,$2, current_date) RETURNING *";
  // Use the pool object to send the query to the database
  // passing the mainEntry as a parameter to prevent SQL injection
  // try block to catch errors
  const result = await pool.query(queryText, [
    journal.entry_type,
    journal.post,
  ]);
  // The rows property of the result object contains the created entry
  // Display entry created
  return result.rows[0];
}
