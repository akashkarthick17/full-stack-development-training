const mysql = require('mysql');

const getConnection = () => {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo-list',
  });

  return connection;
}

module.exports = getConnection;