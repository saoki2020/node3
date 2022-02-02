const model = require("../models/model");

module.exports = {
  goIndex: (req, res) => {
    res.render("index", {title: "Index"});
  },
  goQuizPage: async(req, res) => {
    const quizData = await model.requestQuiz();
    const shffledQuizData = model.makeQuiz(quizData);
    res.render("quiz", {title: "Quiz", data: shffledQuizData});
    model.deleteQuiz();
  },
};
