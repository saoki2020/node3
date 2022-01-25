module.exports = {
  goIndex(req, res) {
    res.render("index", {title: "Index"});
  },
  goQuizApp(req, res) {
    res.render("quizApp", {title: "QuizApp"});
  },
  getQuizData() {
    
  }
};
