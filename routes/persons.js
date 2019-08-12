const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const { Person, validate } = require('../models/person');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const people = await Person.find().sort('name');
  res.send(people);
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let person = new Person({ name: req.body.name });
  person = await person.save();

  res.send(person);
});

router.delete('/:id', [auth, admin], async (req, res) => {
  const person = await Person.findByIdAndRemove(req.params.id);

  if (!person) return res.status(404).send('The person with the given ID was not found.');

  res.send(person);
});

module.exports = router;