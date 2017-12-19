module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");
        console.log("get all");
        dbInstance
          .get_todos()
          .then(results => res.status(200).send(results))
          .catch(err => res.status(500).send(err));
      },


      createTodo: (req, res, next) => {
        const dbInstance = req.app.get("db");
        console.log("creating new todo")
        const {
          todo
        } = req.body;
    
        dbInstance
          .create_todo([
            todo
          ])
          .then(() => res.status(200).send())
          // .catch(err => res.status(500).send(err));
      },

      deleteTodo: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        console.log(params.id)
        dbInstance
          .delete_todo([params.id])
          .then(() => res.status(200).send())
          .catch(err => res.status(500).send(err));
      },


      editTodo: (req, res, next) => {
        console.log("editing todo");
        const dbInstance = req.app.get("db");
        const { params } = req;
        const {
            todo
        } = req.body;
    
        dbInstance
          .edit_todo([
            params.id,
            todo
          ])
          .then(() => res.status(200).send())
          .catch(err => res.status(500).send(err));
      },
}