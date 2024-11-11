import pool from "../config/db.js";

const createUrlTable = async () => {
  const queryText = `
  CREATE TABLE IF NOT EXISTS urls (
  id SERIAL PRIMARY KEY,
  shortUrl VARCHAR(100) NOT NULL,
  longUrl VARCHAR(2048) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
)
  `;
  try {
    pool.query(queryText);
    console.log("Url table created if not exits");
  } catch (error) {
    console.log("Error creating urls table : ", error);
  }
};

export default createUrlTable;
