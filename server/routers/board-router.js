const { Router } = require("express");
const boardController = require("../controllers/board-controller");

const router = new Router();

router.get("/", boardController.getBoards);

module.exports = router;