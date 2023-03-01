const express = require('express')
const http = require('http')
const path = require('path')
const fs = require('fs')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const os = require('os');
const db = require('./js/db');
const bodyParser = require("body-parser")
const moment = require('moment');
//const exercise = require('./exercise');
//const exercise1 = require('./exercise1');
//const exercise2= require('./exercise2');
//const exercise3= require('./exercise3');
const exercise4= require('./exercise4');
const { Router } = require('express')


console.log(os.uptime());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use(bodyParser.urlencoded({
    extended:true
}));
app.set('views', path.join(__dirname + '/views'));   /////JAKA JEST RÓNICA USE==> SET?
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)

app.get('/greeting', (req, res) => {
    
    res.send('hello')
})



app.get('' || '/index.html', (req, res) => {
   
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/dessert.html', (req, res) => {
    res.sendFile(__dirname + '/views/dessert.html')
})
app.get('/soups.html', (req, res) => {
    res.sendFile(__dirname + '/views/soups.html')
})
app.get('/calendar.html', (req, res) => {
    db('SELECT * FROM events', function (err, rows) {
        if (err) {
            req.flash('error', err)
            res.render('calendar', { data: '' })
        } else {
            console.log(rows)
            res.render('calendar', { data: rows, moment })  //JAKA JEST RÓNICA MIĘDZY RENDER A SENDFILE
        }
    })
    
})


app.post("/", function(req, res) {
    let title = req.body.title;
    let note = req.body.note;
    let priority = req.body.priority;
    let data = req.body.data;

    let sql = `INSERT INTO events (id, title, note, priority, data) VALUES (null, "${title}", "${note}", "${priority}", "${data}")`; 
    db(sql, function (err, rows) {
        if (err) {
            res.send(err)
            req.flash('error', err)
        } else {
            res.redirect('/calendar.html');
        }
    })
  });

  app.post('/delete:id', function (req, res) {
    let id = (req.params.id.slice(1));
    let sql = `DELETE FROM events WHERE id = ${id}`; 
    db(sql, function (err, rows) {
        if (err) {
            res.send(err)
            req.flash('error', err)
        } else {
            res.redirect('/calendar.html');
        }
    })
  });

  
  
  



app.listen(port, () => console.info(`App listening on port ${port}`))

