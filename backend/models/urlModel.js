import pool from "../config/db.js";

export const getAllUrlService = async () => {
  const result = await pool.query("SELECT * FROM urls");
  return result.rows;
};

export const getUrlByShortUrl = async (shortUrl) => {
  const result = await pool.query("SELECT * FROM urls WHERE shortUrl = $1", [
    shortUrl,
  ]);
  return result.rows[0];
};

export const createShortUrl = async (shortUrl, longUrl) => {
  const result = await pool.query(
    "INSERT INTO urls (shortUrl, longUrl) VALUES ($1, $2) RETURNING *",
    [shortUrl, longUrl]
  );
  return result.rows[0];
};
