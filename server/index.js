require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const todos_controller = require("./controllers/todos_controller");
const path = require('path');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});

// get all todos
app.get("/api/todos", todos_controller.getAll);

// add new todo
app.post("/api/newtodo", todos_controller.createTodo);

// delete todo
app.delete("/api/delete/:id", todos_controller.deleteTodo);

// edit todo
app.put("/api/edit/:id", todos_controller.editTodo);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});