require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Maicol",
    titulo: "Road Trip by TEMPLATED",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Maicol",
    titulo: "Road Trip by TEMPLATED",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Maicol",
    titulo: "Road Trip by TEMPLATED",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
