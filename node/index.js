const http = require('http');
const express = require('express');
var mysql = require('mysql');
var getConnection = require('./database-connection');
var bodyParser = require('body-parser');

const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/todo-list', (req, res) => {
  var connection = getConnection();

  connection.connect();

  connection.query('SELECT * FROM action', function (error, results, fields) {
    if (error) {
      res.json({ error: 'Error fetching todo list' });
    } else {
      let processedResults = [];

      for (let count = 0; count < results.length; count++) {
        let action = results[count];

        processedResults[count] = {
          id: action.ACTION_ID,
          title: action.ACTION_TITLE,
          isComplete: action.ACTION_IS_COMPLETE === 1 ? true : false,
        };
      }

      res.json({ results: processedResults });
    }
  });

  connection.end();
});

app.post('/todo-list', (req, res) => {
  const body = req.body;

  var connection = getConnection();
  connection.connect();

  connection.query(
    `INSERT INTO action (ACTION_TITLE, ACTION_IS_COMPLETE) VALUES ('${body.title}', ${body.isCompleted})`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        l;
        p;
        res.json({ error: 'Error writing action to the database.' });
      } else {
        res.json({ results: 'Successfully added.' });
      }
    }
  );
  connection.end();
});

app.put('/todo-list/:id', (req, res) => {
  const body = req.body;
  const actionId = req.params.id;

  var connection = getConnection();
  connection.connect();

  connection.query(
    `UPDATE action SET ACTION_TITLE='${body.title}',ACTION_IS_COMPLETE=${body.isCompleted} WHERE ACTION_ID=${actionId}`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        l;
        p;
        res.json({ error: 'Error writing action to the database.' });
      } else {
        res.json({ results: 'Successfully Updated.' });
      }
    }
  );
  connection.end();
});

app.delete('/todo-list/:id', (req, res) => {
  const actionId = req.params.id;

  var connection = getConnection();
  connection.connect();

  connection.query(
    `DELETE FROM action WHERE ACTION_ID=${actionId}`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        l;
        p;
        res.json({ error: 'Error writing action to the database.' });
      } else {
        res.json({ results: 'Successfully Deleted.' });
      }
    }
  );
  connection.end();
});

app.listen(3000, () => {
  console.log('Server started...');
});
