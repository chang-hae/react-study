const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/hello', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if(Number(token) < Date.now()) {
        res.status(401);
        res.send("Unauthorized");
    } else {
        res.status(200);
        res.send('Ok');
    }
});

app.get('/delay/:term', (req, res) => {
    setTimeout(() => {
        res.status(200);
        res.send(req.params.term);
    }, Number(req.params.term));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});