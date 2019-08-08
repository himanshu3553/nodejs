const mongoose = require('mongoose');
const persons = require('../routes/persons');
const express = require('express');
const app = express();

// Database connection
mongoose.connect('mongodb://localhost/auth')
    .then(() => {
        console.log('Connected to Mongodb...');
    }).catch(err => {
        console.log('Error in connecting with mongodb...', err);
    });

app.use(express.json());
app.use('/api/persons', persons);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
