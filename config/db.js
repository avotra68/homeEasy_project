
// mysql à installer
let mysql = require("mysql");


// information sur la bd : initialiser la connexion
let connection = mysql.createConnection({

  host:"localhost",
  user:"avotra",
  password:"avotra",
  database:"easyhome"

});

connection.connect();

module.exports = connection;
