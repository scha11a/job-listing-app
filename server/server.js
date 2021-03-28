const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/jobs', (req, res) => {
    const url = "https://jobs.github.com/positions.json?description=python&location=new+york";

    fetch(url)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => console.log(err.name))
});

app.listen(3000, () =>
    console.log('Express server is running on localhost:3000')
);
