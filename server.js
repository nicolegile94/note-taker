const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json())
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
const { notes } = require('./data/db/db.json');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './data/db/db.json'),
        JSON.stringify({ db: noteArray }, null, 2)
    );

    return note;
};

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});