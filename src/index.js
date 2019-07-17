const express = require('express');
const app = express();
const port = 3000;

const startup = require('./startup');
startup();

app.use(express.json());

const api = require('./routes');
app.use(api);

app.listen(port, () => console.log(`Running on port ${port}`));
