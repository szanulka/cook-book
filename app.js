const express = require('express')
const http = require('http')
const path = require('path')
const fs = require('fs')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))

let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    database: "cookbook",
    user: "root",
    password: ""
});

let sql = "SELECT * FROM hello";

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
    });
});