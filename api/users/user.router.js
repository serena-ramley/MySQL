const {
  createUser,
  getUserById,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.patch("/", updateUsers);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/", deleteUser);

module.exports = router;
