UPDATE todos
SET todo = $2
WHERE todo_id = $1;