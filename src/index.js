const persons = require('../routes/persons');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/persons', persons);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));