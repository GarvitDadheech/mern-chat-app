const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(authMiddleware, allUsers);
router.route("/register").post(registerUser);
router.post("/login", loginUser);

module.exports = router;