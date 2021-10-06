const express = require('express');

const app = express();
const studio = require('./controlla/studio.js');
const film = require('./controlla/film.js');
const actor = require('./controlla/actor.js');
const reviewer = require('./controlla/reviewer');


app.use(express.json());

app.use('/studios', studio);
app.use('/films', film);
app.use('/actors', actor);
app.use('/reviewers', reviewer);
app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error.js'));

module.exports = app;
