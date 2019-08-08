const mongoose = require('mongoose');
const persons = require('../routes/persons');
const express = require('express');
const app = express();


app.use(express.json());
app.use('/api/persons', persons);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// mongoose.connect('mongodb://127.0.0.1:27017/wm', { useNewUrlParser: true }.then(() => {
//     console.log('Connected to Mongodb...');
// }));

// Database connection
mongoose.connect('mongodb://localhost/wm')
    .then(() => {
        console.log('Connected to Mongodb...');
    }).catch(err => {
        console.log('Error in connecting with mongodb...', err);
    });

// Schema 
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    date: { type: Date, default: Date.now },
});

// Creating model using above schema
const Person = mongoose.model('Person', personSchema);

// async function to save documents into db
async function createPerson() {
    // making instance of the created model to be saved into database. 
    const person = new Person({
        name: "Himanshu Singh",
        age: 29
    });

    // Saving person instance into db. 
    // save() function is an async function so using await and async. 
    const result = await person.save();
    console.log(result);
}

async function getPersons() {
    const persons = await Person.find({ name: 'Himanshu Singh' }).limit(10).sort({ name: 1 }).select({ name: 1 });
    console.log(persons);
}

// createPerson();
// getPersons();


