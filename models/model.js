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

const requestApi = async() => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const responseObject = await response.json();
    const quizes = responseObject.results;
    return quizes;
  } catch (e) {
    console.log(e);
  }
};

const makeInstance = (quizes) => {
  const quiz = new Quiz(quizes[0].category, quizes[0].difficulty, quizes[0].question, quizes[0].correct_answer, quizes[0].incorrect_answers);
  return quiz;
};

module.exports = {
  getQuizData: async() => {
    const quizes = await requestApi();
    return makeInstance(quizes);
  }
};
