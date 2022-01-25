const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.goIndex);
router.get("/waiting", controller.goQuizApp);

module.exports = router;
