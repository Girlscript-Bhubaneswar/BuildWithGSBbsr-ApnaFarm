const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoute = require('./Routes/routes');
const cors = require('cors')

dotenv.config();

//initialize express.
const app = express();


//connect to db
mongoose.connect(
    process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to db')
);

// Initialize variables.
const port = 3001; // process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//set route middleware
app.use('/', authRoute);

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');