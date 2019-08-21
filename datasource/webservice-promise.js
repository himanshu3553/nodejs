const rp = require('request-promise');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // GET something from a JSON REST API
    var options = {
        method: 'GET',
        uri: 'https://currency-converter5.p.rapidapi.com/currency/convert',
        headers: {
            'x-rapidapi-host': 'currencyconverter.p.rapidapi.com',
            'x-rapidapi-key': '22680d14f7msh18624d08fa2b566p1b0eaejsna79bfe16fc5b'
        },
        qs: {
            'format': 'json',
            'from': 'USD',
            'to': 'AUD',
            'amount': '10'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (value) {
            console.log('API call success...');
            console.log(value);
            res.send(value);
        })
        .catch(function (err) {
            console.log('API call failed...');
            console.log(err);
            res.send(err);
        });    
});

module.exports = router;

// // POST data to a JSON REST API
// var options = {
//     method: 'POST',
//     uri: 'http://api.posttestserver.com/post',
//     body: {
//         some: 'payload'
//     },
//     json: true // Automatically stringifies the body to JSON
// };

// rp(options)
//     .then(function (parsedBody) {
//         // POST succeeded...
//     })
//     .catch(function (err) {
//         // POST failed...
//     });
