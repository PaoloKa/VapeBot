const sqlite3 = require('sqlite3').verbose();

let responses;
let connection = new sqlite3.Database('assets/db/server.db',(err) => {
    if (err) {
       console.error(err.message);
    } else {
      createTables();
      loadResponses();
    }
});

const loadResponses =() => {
  connection.all("select *  from responses ", (err, row) => {
    if (err) {
        return console.error(err.message);
    }
   responses = row;
});
}

const createTables = () => {
  console.log("Creating tables");
  connection.run("CREATE TABLE IF NOT EXISTS responses(word text, response text)");
  connection.run("CREATE TABLE IF NOT EXISTS pictures(url text, type text)");
}

module.exports = {
  
   getResponses(){
    return responses;
  },

  addResponse(reponse,reaction){
    connection.run('INSERT INTO responses(word,response) VALUES ("'+reponse+'" , "'+reaction+'")');
    loadResponses(); //to add the new values to the existing array
  }

};