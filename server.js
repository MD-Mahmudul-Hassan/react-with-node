var express = require('express');

var app = express();

app.get('/api', function(req, res){
    res.send("Node server is running");
});

app.post('/api/add-user', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


app.listen(5000);