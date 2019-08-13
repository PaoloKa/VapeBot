const sqlite3 = require('sqlite3').verbose();

let connection = new sqlite3.Database('assets/db/server.db',(err) => {
    if (err) {
       console.error(err.message);
    } else {
      createTables();
    }
});

const createTables = () => {
  console.log("Creating tables");
  connection.run("CREATE TABLE IF NOT EXISTS responses(word text, response text)");
  connection.run("CREATE TABLE IF NOT EXISTS pictures(url text, type text)");
}

module.exports = connection;