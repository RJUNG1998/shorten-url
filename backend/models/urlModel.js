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
    `INSERT INTO urls (shortUrl, longUrl) 
     VALUES ($1, $2) 
     ON CONFLICT (longUrl) DO NOTHING 
     RETURNING *`,
    [shortUrl, longUrl]
  );

  // 새로 삽입된 row가 없다면 이미 존재하는 row를 SELECT
  if (result.rows.length === 0) {
    const existingUrl = await pool.query(
      "SELECT * FROM urls WHERE longUrl = $1",
      [longUrl]
    );
    return existingUrl.rows[0];
  }

  return result.rows[0];
};
