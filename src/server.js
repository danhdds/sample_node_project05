const express = require('express');
const bootstrap = require('./bootstrap.js');

const app = express();

// requesting parsing
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

bootstrap(app, router);