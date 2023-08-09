const fs = require("fs");

const getResults = (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });
};

const postResults = (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      const { id, correctAns, allQuestions } = req.body;
      const newResult = {
        id,
        result: `${Math.round((correctAns / allQuestions) * 100)}%`,
      };
      jsonData.results.push(newResult);
      fs.writeFile(
        "db.json",
        JSON.stringify(jsonData, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            res.status(500).json({ error: "Error writing data to file" });
            return;
          }
          res.status(200).json({ message: "New result created successfully" });
        }
      );
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      res.status(500).json({ error: "Error parsing JSON data" });
    }
  });
};

module.exports = { postResults, getResults };
