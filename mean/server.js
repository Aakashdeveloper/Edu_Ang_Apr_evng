const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/firstapp')));

// API location
//app.use('/api', api);

// Send all other requests to the Angular app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/firstapp/index.html'));
})

app.get('/product',(req,res) => {
    res.send('hiii')
})

//Set Port
const port = process.env.PORT || '3046';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));