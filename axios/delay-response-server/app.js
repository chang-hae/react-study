const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    console.log(req.originalUrl);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if(Number(token) < Date.now()) {
        res.status(401);
        res.send("Unauthorized");
    } else {
        res.status(200);
        res.send('Ok');
    }
})

app.get('/delay', (req, res) => {
    console.log(req.originalUrl);
    setTimeout(() => {
        res.status(200);
        res.send("Ok");
    }, 5000);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});