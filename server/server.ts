//require express
const express = require('express');
//require body-parser
const bodyParser = require('body-parser');
//port 
const port = 4000;
//create express app
const app = express();
//use body-parser
app.use(bodyParser.json());
//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

//create list of jsx elements passed from client
let list = [];
//create home endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//show list of elements
app.get('/list', (req, res) => {
    console.log("/list");
    res.send(list);
});

//add jsx element to list
app.post('/add', (req, res) => {
console.log("/add");
    list.push(req.body);
    res.send('Element added');
});