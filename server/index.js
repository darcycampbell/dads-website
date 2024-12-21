import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import contactDetails from "../src/content/contactDetails.js";

const directory = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${directory}../../.env` });
const app = express();
const PORT = 8000;
const key = process.env.SECRET_SITE_KEY;
console.log(key);

app.use(cors());
app.use(bodyParser.json());

app.post("/api", async (req, res) => {
  const { recaptchaToken } = req.body;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${recaptchaToken}`
  );
  if (data.success) {
    res.send(contactDetails);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
