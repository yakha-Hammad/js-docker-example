"use strict";

import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());

app.get('/api/v1/greet', (req, res) => {
    setTimeout(() => {
        return res.json({message: 'Hello, World!'});
    }, 2000);
});

app.listen(port, () => console.log('This app is listening on port ' + port));