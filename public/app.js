const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('public'));

//llamando archivos .html
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './views/index.html'))});




//iniciando servidor en puerto:
let puerto = 3030;

app.listen(puerto, () => console.log('Corriendo servidor puerto ' + puerto));