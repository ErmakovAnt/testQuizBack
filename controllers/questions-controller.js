const fs = require("fs");

const getQuestions = (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });
};

module.exports = { getQuestions };
