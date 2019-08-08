const { Person, validate } = require('../models/person');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const people = await Person.find().sort('name');
  res.send(people);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let person = new Person({ name: req.body.name });
  person = await person.save();

  res.send(person);
});

module.exports = router;