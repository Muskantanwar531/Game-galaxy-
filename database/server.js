var express = require("express");
const cors = require('cors');

var app = express();
var connection = require('./database');

app.use(express.json());
app.use(cors());

app.post('/signup', function(req, res){
  const { name, email, password } = req.body;
  console.log("post requested");

  const sql = 'INSERT INTO login (name, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, password], function(err, result){
    if (err) {
      console.error("Error inserting data into database:", err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log("User created successfully");
      res.status(201).json({ message: 'User created successfully' });
    }
  });
});

app.post('/login', function(req, res) {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';
  
  connection.query(sql, [email, password], function(err, result) {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (result.length === 0) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      console.log("Login is successfully");
      res.status(200).json({ message: 'Logged in successfully' });
    }
  });
});

app.listen(5000, function(){
  console.log("sever is running on 5000");
  connection.connect(function(err){
    if(err) throw err;
    console.log("database is connected");
  })
}); 