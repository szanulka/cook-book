const express = require('express')
const http = require('http')
const path = require('path')
const fs = require('fs')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)

app.get('' || '/index.html', (req, res) => {
    // res.render('index')
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/dessert.html', (req, res) => {
    res.sendFile(__dirname + '/views/dessert.html')
})
app.get('/soups.html', (req, res) => {
    res.sendFile(__dirname + '/views/soups.html')
})
app.get('/calendar.html', (req, res) => {
    res.sendFile(__dirname + '/views/calendar.html')
})

app.get(route = 'index.html', (req, res) => {
    res.sendFile(__dirname + route)
})

app.listen(port, () => console.info(`App listening on port ${port}`))

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "localhost",
    database: "cookbook",
    user: "root",
    password: ""
});

let sql = "SELECT * FROM hello";

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
    });
});