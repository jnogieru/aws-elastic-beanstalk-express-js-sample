const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('GOOD DAY MY PEOPLE!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
