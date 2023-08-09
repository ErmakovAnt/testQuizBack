const express = require("express");
const resultRoute = require("./routes/result-router");
const questionsRoute = require("./routes/questions-router");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(questionsRoute);
app.use(resultRoute);

app.listen(PORT, () => {
  console.log("Сервер работает на порту", PORT);
});
