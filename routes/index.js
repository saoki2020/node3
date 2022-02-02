const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.goIndex);
router.get("/quiz", controller.goQuizPage);

module.exports = router;
