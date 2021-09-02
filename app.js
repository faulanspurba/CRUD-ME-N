const express = require("express");
const app = express();
const port = 3000;

// load req.body
app.use(express.urlencoded({ extended: true }));

// public assets
app.use(express.static("assets"));

// view engine
app.set("view engine", "ejs");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

//method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// load assets
app.use(express.static("assets"));

// load databse
require("./server/database/db");

// load router
const render = require("./server/services/render");
const todo = require("./server/services/todo");
// render
// home
app.get("/", render.home);
// about
app.get("/about", render.about);
// contact
app.get("/contact", render.contact);
// add-contact
app.get("/contact/add", render.add);
// edit-contact
app.get("/contact/edit/:_id", render.edit);

// todo
// add data
app.post("/contact", todo.add);
// edit data
app.put("/contact", todo.edit);
// delete data
app.delete("/contact", todo.delete);

// listen port
app.listen(port, () =>
  console.log(`App listening to https://localhost${port}`)
);
