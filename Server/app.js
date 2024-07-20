const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { mongodbConnection } = require('./config/db');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    mongodbConnection();
});