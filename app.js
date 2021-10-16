const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('God is the greatest and I belive so.. Boljibeatis also a witness of His faithfulness!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
