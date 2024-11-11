import express from "express";
import { createUrl } from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", createUrl);

export default router;
