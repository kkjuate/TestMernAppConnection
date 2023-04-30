const express = require('express');
const mongoose = require('moongose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT, ()=> console.log("Servidor conectado"));