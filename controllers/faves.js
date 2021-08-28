const express = require("express");
const router = express.Router();

router.get("/foods", function (req, res) {
  res.render("faves/foods", {
    title: "Favorite Foods",
    foods: ["coconut", "avocado"],
  });
});

router.get("/animals", function (req, res) {
  res.render("faves/animals", {
    title: "Favorite Animals",
    animals: ["sand crab", "corny joke dog"],
  });
});

module.exports = router;
