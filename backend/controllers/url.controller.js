import shortid from "shortid";
import { createShortUrl, getUrlByShortUrl } from "../models/urlModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUrl = async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate();
  try {
    const newUrl = await createShortUrl(shortUrl, longUrl);
    handleResponse(res, 201, "Url created successfully", newUrl);
  } catch (error) {
    next(error);
  }
};

export const getUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await getUrlByShortUrl(shortUrl);
    if (!url) return handleResponse(res, 404, "Url not found");
    res.redirect(302, url.longurl);
  } catch (error) {}
};
