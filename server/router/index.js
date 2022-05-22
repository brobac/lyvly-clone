const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
});

router.get("/home", (req, res) => {
  res.redirect("/");
});

module.exports = router;
