const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.goIndex);
router.get("/quiz", controller.goQuiz);

module.exports = router;
