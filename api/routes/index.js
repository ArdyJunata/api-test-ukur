const express = require("express"),
    router = express.Router();

const {
    createAllMembers,
    login,
} = require("../controllers/member.controller")

const {
    verifyLogin,
} = require("../middlewares/verify.middleware")

router.get("/", verifyLogin, createAllMembers);
router.post("/login", login);

module.exports = router;
