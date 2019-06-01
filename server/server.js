const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const forum = require('./forum');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/message', forum.getMessages);
app.post('/message', forum.addMessage);

app.listen(3200, () => console.log('App listening on port 3200!'));

module.exports = app;