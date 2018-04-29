// Require dependencies
var mysql = require('mysql');
// Create connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kimchi_db'
});
// Initiate connection, error handling
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
