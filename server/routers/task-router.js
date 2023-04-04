const { Router } = require("express");
const taskController = require("../controllers/task-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.get("/", authMiddleware, taskController.allTasks);
router.get("/:ref", authMiddleware, taskController.getTask);
router.post("/", authMiddleware, taskController.addTask);
router.delete("/:ref", authMiddleware, taskController.deleteTask);
router.patch("/:ref", authMiddleware, taskController.patchTask);

module.exports = router;