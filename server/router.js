const express = require("express");
const sending = require("./sending");

const router = express.Router();

router.post("/send",sending)

module.exports = router