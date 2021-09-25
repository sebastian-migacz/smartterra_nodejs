require('./utils')
var mysql = require('mysql');
//sql
var connection = mysql.createConnection({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: 'tehheran',
    database: 'world'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();




const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/kontakt', (req, res) => {
    res.send('')
})

console.log('hello there!')

app.listen(port)
//greetings()
//sum(30, 53)

