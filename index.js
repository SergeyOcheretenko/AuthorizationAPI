'use strict';

import express from "express";

const port = 8000;
const app = express();

app.get('/users', (req, res) => {
    res.json('Work');
});

app.listen(port, () => {
    console.log('Started');
});