const express = require('express');
const router = express.Router();
var Request = require("request");

function getData() {
    Request.get("http://httpbin.org/ip", (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        console.log(JSON.parse(body));
    });
}

function converter() {
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://httpbin.org/post",
        "body": JSON.stringify({
            "firstname": "Nic",
            "lastname": "Raboy"
        })
    }, (error, response, body) => {
        if (error) {
            return console.log(error);
        } 
        console.log(JSON.parse(body));
        return response;
    });
}

router.get('/', (req, res) => {
    getData();
    res.send("");
});

router.post('/', (req, res) => {
    const response = converter();
    res.send(response);
});

module.exports = router;