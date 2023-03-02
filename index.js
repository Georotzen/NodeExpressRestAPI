import express from 'express';
// const express = require('express');

import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');

import usersRoutes from './routes/users.js';

const app = express();

const PORT = 3007;

app.use(bodyParser.json());
app.use('/users', usersRoutes);


// HTTP: GET verb +  (Request, Response) Callback function
app.get('/', (req, res) => {

   // console.log('GWS Web Solutions 2022 [Test on server is successful!');
    res.send('Welcome to GWS Introduction to Software Engineering 2022');

});

// Single line syntax for the app.get method above.
app.get('/api', (req, res) => res.send('GWS Introduction to Node.JS and Express.JS - REST API 2022'));


app.listen(PORT, () => console.log(`Active Server Running on port: http://localhost:${PORT}`));

