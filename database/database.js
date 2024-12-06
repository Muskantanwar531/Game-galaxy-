var mysql =require("mysql");
 
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'signup'
});
module.exports= connection;