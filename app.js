const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/foods", function (req, res) {
  res.render("faves/foods", {
    title: "Favorite Foods",
    foods: ["coconut", "avocado"],
  });
});
app.get("/animals", function (req, res) {
  res.render("animals", {
    title: "Favorite Animals",
    animals: ["sand crab", "corny joke dog"],
  });
});

app.use("/faves", require("./controllers/faves"));
app.use("/hates", require("./controllers/hates"));

app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
