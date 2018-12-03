var express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.json([{id : 10,  greeting : 'Hello From Express'}]);

});

app.post('/api/add-user', (req, res) => {
    if (req.body.email != 'm.hassan@sjinnovation' && req.body.password != '123') {
        res.send("Invalid credentials. Please try again.");
    } else {
        res.send(true);
        //res.send("Login successfull!");
    }


});


app.listen(5000);