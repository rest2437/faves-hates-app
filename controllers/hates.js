const express = require("express");
const router = express.Router();

router.get("/foods", function (req, res) {
  res.render("hates/foods", {
    title: "hated Foods",
    foods: ["coconut", "avocado"],
  });
});

router.get("/animals", function (req, res) {
  res.render("hates/animals", {
    title: "Hated Animals",
    animals: ["sand crab", "corny joke dog"],
  });
});

module.exports = router;
