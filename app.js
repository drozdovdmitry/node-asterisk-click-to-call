
const express = require('express');
const app = express();
const port = 7000;
const ami = require('./asterisk');
const Call = require('./call');
const callRouter = require('./routes/call');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', callRouter);
  
app.listen(port, () => {
    console.log(`node-asterisk-click-to-call app listening at http://localhost:${port}`);
});

module.exports = app;
