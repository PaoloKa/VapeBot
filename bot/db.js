const sqlite3 = require('sqlite3').verbose();

let connection = new sqlite3.Database('assets/db/server.db',(err) => {
    if (err) {
      return console.error(err.message);
    }
    // connection.run('CREATE TABLE responses(word text, response text)');
    //  connection.run('DELETE from  responses WHERE "1=1"');
    console.log('Connected to the SQlite database.');
});

module.exports = connection;