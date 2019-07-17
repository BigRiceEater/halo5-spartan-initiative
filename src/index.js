const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/alive', (req, res) => {
  res.status(200).send('Spartan API is live');
});

app.listen(port, () => console.log(`Running on port ${port}`));
