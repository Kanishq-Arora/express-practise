const path = require('path');
const express = require('express');
const homeRoute = require('./routes/homeRouter');
const contactRoute = require('./routes/contactRouter');
const rootDir = require('./utils/pathUtil');

const app = express();


app.use(express.urlencoded());
app.use(homeRoute);
app.use(contactRoute);
app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'error404.html'));
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running successfully on http://localhost:${PORT}`)
});