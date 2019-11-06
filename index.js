const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'pages', 'index.html'));
});

app.post('/chatfuel', (req, res) => {
    const body = req.body;

    console.log(body);

    res.status(200).send({
        ok: true,
        body: body
    });
});