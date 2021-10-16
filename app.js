const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('God is the greatest and I belive so.. Mary is also a witness!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
