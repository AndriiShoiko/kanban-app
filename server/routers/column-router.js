const { Router } = require("express");
const columnController = require("../controllers/column-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.get("/", authMiddleware, columnController.allColumns);
router.get("/:ref", authMiddleware, columnController.getColumn);
router.post("/", authMiddleware, columnController.addColumn);
router.delete("/:ref", authMiddleware, columnController.deleteColumn);
router.patch("/:ref", authMiddleware, columnController.patchColumn);

module.exports = router;