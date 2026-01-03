const path = require('path');
const express = require('express');
const contactRoute = express.Router();
const rootDir = require('../utils/pathUtil');

contactRoute.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

contactRoute.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactSuccessful.html'));
})

module.exports = contactRoute;