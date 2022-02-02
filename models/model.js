const fetch = require("node-fetch");

// APIからクイズを取得
const requestQuiz = async() => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const responseObj = await response.json();
    const quizes = responseObj.results;
    return quizes;
  } catch (e) {
    console.log(e);
  }
};

// Quizクラス
class Quiz {
  constructor (category, difficulty, question, correctAnswer, allAnswers) {
    this.category = category;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.allAnswers = allAnswers;
  }
}

// Quizインスタンスを作成する
const newQuiz = [];
const makeQuiz = (quizes) => {
  quizes.forEach(quiz => {
    newQuiz.push(new Quiz(
      quiz.category,
      quiz.difficulty,
      quiz.question,
      quiz.correct_answer,
      shuffleAnswers(quiz.correct_answer, quiz.incorrect_answers)));
  });
  return toJson(newQuiz);
};

// Quizを空にする
const deleteQuiz = () => {
  newQuiz.length = 0;
};

// 正解と不正解をまとめてからシャッフル
const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
  const answerArray = [];
  answerArray.push(correctAnswer);
  incorrectAnswers.forEach(answer => {
    answerArray.push(answer);
  });
  for (let i = answerArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [answerArray[j], answerArray[i]] = [answerArray[i], answerArray[j]];
  }
  return answerArray;
};

// json形式に変換
const toJson = (object) => {
  return JSON.stringify(object);
};

module.exports = {
  requestQuiz,
  makeQuiz,
  deleteQuiz
};
