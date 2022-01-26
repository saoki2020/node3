const fetch = require("node-fetch");

class Quiz {
  constructor (category, difficulty, question, correctAnswer, incorrectAnswers) {
    this.category = category;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}
module.exports = {
  getQuizData: async() => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
      const responseObject = await response.json();
      const quizes = responseObject.results;
      const index = 0;
      return new Quiz(
        quizes[index].category,
        quizes[index].difficulty,
        quizes[index].question,
        quizes[index].correct_answer,
        quizes[index].incorrect_answers,
      );
    } catch (e) {
      console.log(e);
    }
  }
};
