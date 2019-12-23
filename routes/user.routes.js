const express = require("express");
const router = express.Router();

const user_controller = require("../controller/user.controller");

router.get("/signUp", user_controller.user_signIn);
router.post("/signUp", user_controller.user_submit);

module.exports = router;