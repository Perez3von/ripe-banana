const express = require('express');

const app = express();
const studio = require('./controlla/studio.js');




app.use(express.json());




app.use('/studios', studio);


app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error.js'));

module.exports = app;
