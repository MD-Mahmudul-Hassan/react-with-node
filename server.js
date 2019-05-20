var express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');
});

// route for user's dashboard
app.get('/dashboard', (req, res) => {
    console.log('dashboard clicked!');
    if (req.session.user && req.cookies.user_sid) {
        //res.sendFile(__dirname + '/public/dashboard.html');
    } else {
        res.redirect('/login');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.json([{id : 10,  greeting : 'Hello From Express'}]);

});

app.post('/api/add-user', (req, res) => {

});

app.post('/api/login', (req, res) => {
    console.log('login api called');

    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/",  { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        var dbo = client.db("dbstackoverflow");        
        dbo.collection("users").findOne({}, function(err, result) {
            if (err) throw err;            

            if(result.email === 'm.hassan@sjinnovation.com')
            {
                bcrypt.compare(req.body.password, result.password, function(err, response) {                                        
                    if (response) {
                        res.send("Successfully logged in!");
                    } else {
                        res.send("Invalid credentials. Please try again");
                    }
                });
            }

            client.close();
        });
    });



});


app.listen(5000);