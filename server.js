const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/tools', (req, res) => {
    res.sendFile(__dirname + '/tools.json');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});