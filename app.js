const express = require('express');

const path = require('path');

const app = express();

app.use('static', express.static(__dirname + 'public'));

//llamando archivos .html
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './view/home.html'))});


//iniciando servidor en puerto:
let puerto = 3030;

app.listen(puerto, () => console.log('Corriendo servidor puerto ' + puerto));