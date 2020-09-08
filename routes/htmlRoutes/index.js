var path = require("path");
var router = require("express").Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = router;