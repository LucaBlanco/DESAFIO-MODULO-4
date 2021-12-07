const { Console } = require('console');
const express = require('express');

const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

//C:\Users\Luca\Desktop\DESAFIO CLASE 4

//llamando archivos .html
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './view/home.html'))});



//iniciando servidor en puerto:
let puerto = 3030;

app.listen(puerto, () => console.log('Corriendo servidor puerto ' + puerto));