import express from "express";
import dotenv from "dotenv";
import urlRoutes from "./routes/url.routes.js";
import cors from "cors";
import pool from "./config/db.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUrlTable from "./data/createUrlTable.js";
import { getUrl } from "./controllers/url.controller.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/url", urlRoutes);
app.get("/:shortUrl", getUrl);

app.use(errorHandling);

createUrlTable();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
