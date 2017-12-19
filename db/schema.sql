-- 67C
CREATE TABLE todos (
	todo_id text PRIMARY KEY AUTOINCREMENT,
	todo text
);

-- 69B
-- Some of the datatypes in dbs can be integers, strings, booleans.  Usually you would have an id for each table and set them to be primary keys and to autoincrement so that the ids can be unique.  When a row is deleted, or added, the keys will still be unique as it will autoincrement.  For user inputs such as name, email, etc, you would want to set a varchar to limit how many characters the user inputs.  This will help in instances where people try to flood your server and crash your app.