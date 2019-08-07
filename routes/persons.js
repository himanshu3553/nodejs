const express = require('express');
const router = express.Router();

const persons = [
  { id: 1, name: 'Himanshu' },  
  { id: 2, name: 'Parul' },  
  { id: 3, name: 'Sonal' },  
];

router.get('/', (req, res) => {
  res.send(persons);
});

module.exports = router;