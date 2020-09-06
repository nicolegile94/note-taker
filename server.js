const express = require('express');
const app = express();
const { db } = require('./data/db/db.json');

app.get('/api/db', (req, res) => {
    let results = db;
    console.log(req.query)
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});