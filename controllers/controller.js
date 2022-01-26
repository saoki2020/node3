const model = require("../models/model");

module.exports = {
  goIndex: (req, res) => {
    res.render("index", {title: "Index"});
  },
  goQuiz: async(req, res) => {
    const quizData = await model.getQuizData();
    res.render("quiz", {title: "Quiz", data:quizData});
    console.log(quizData);
  }
};
