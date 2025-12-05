import dotenv from "dotenv";
import express from "express";
import indexRouter from "./src/routes/index.js";
import statusRouter from "./src/routes/status.js";

dotenv.config({ path: ".env.development" });

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use(statusRouter);
app.all("/status", (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send("Method not allowed");
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
