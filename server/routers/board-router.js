const { Router } = require("express");
const boardController = require("../controllers/board-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.get("/", authMiddleware, boardController.getBoards);

module.exports = router;