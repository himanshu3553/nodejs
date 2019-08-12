const Joi = require('joi');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Person = mongoose.model('Person', personSchema);

function validatePerson(person) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(person, schema);
}

exports.personSchema = personSchema;
exports.Person = Person; 
exports.validate = validatePerson;
