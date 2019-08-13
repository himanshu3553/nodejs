const rp = require('request-promise');
const express = require('express');
const router = express.Router();

function getData() {
    // GET something from a JSON REST API
    var options = {
        uri: 'http://httpbin.org/ip',
        json: true // Automatically parses the JSON string in the response
    };
    
    rp(options)
        .then(function (value) {
            console.log('API call success...' + value);
            return value;
        })
        .catch(function (err) {
            console.log('API call failed...');
        });
}

router.get('/', (req, res) => {
    let data = getData();
    res.send(data);
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
