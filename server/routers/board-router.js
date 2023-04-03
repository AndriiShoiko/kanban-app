const { Router } = require("express");
const boardController = require("../controllers/board-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.get("/", authMiddleware, boardController.allBoards);
router.get("/:ref", authMiddleware, boardController.getBoard);
router.post("/", authMiddleware, boardController.addBoard);
router.delete("/:ref", authMiddleware, boardController.deleteBoard);
router.patch("/:ref", authMiddleware, boardController.patchBoard);

module.exports = router;