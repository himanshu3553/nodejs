const config = require('config');
const mongoose = require('mongoose');
const persons = require('../routes/persons');
const express = require('express');
const app = express();
const users = require('../routes/users');
const auth = require('../routes/auth');
const webservive = require('../datasource/webservice');
const webservivenew = require('../datasource/webservice-promise');

// if (!config.get('jwtPrivateKey')) {
//     console.error('FATAL ERROR: jwtPrivateKey is not defined.');
//     process.exit(1);
// }

// Database connection
// mongoose.connect('mongodb://localhost/auth')
//     .then(() => {
//         console.log('Connected to Mongodb...');
//     });

app.use(express.json());
app.use('/api/persons', persons);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/webservice', webservive);
app.use('/api/webservice/new', webservivenew);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
