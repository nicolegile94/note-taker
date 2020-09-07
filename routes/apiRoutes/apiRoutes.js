const router = require('express').Router();
const { createNewNote } = require('../../server');
const { notes } = require('../../data/db');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, db);

    res.json(note);
});

module.exports = router;