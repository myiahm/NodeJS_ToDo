// The main point of entry for To Do  node.js
const express = require("express");
const app = express();

const config =require('./config');

/* serves main page when someone types http://localhost:5000/ in a browser */
// app.get("/", function ( req, res) {




//Start listening for connections
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on " + port);
});


const mongoose = require('mongoose');
// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const setupController = require('./controllers/setupController');
setupController(app);