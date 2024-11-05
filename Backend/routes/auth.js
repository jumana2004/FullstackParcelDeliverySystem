const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("../controllers/auth");

dotenv.config();

//REGISTRATION

router.post("/register", registerUser);

//LOGIN

router.post("/login", loginUser);
module.exports = router;
