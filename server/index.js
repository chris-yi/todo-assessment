// 72C
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const todos_controller = require("./controllers/todos_controller");
const path = require('path');
// 74C
const app = express();

// 76F
app.use(bodyParser.json());
app.use(cors());

// 70C
massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});


// 76C
// get all todos
// 74D-1
app.get("/api/todos", todos_controller.getAll);


// add new todo
// 74D-3
app.post("/api/newtodo", todos_controller.createTodo);

// delete todo
// 74D-4 , 76D
app.delete("/api/delete/:id", todos_controller.deleteTodo);

// edit todo
// 74D-2
app.put("/api/edit/:id", todos_controller.editTodo);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});