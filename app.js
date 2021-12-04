const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '.public');



app.use(express.static(publicPath));

//llamando archivos .html
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './view/home.html'))});




//iniciando servidor en puerto:
let puerto = 3030;

app.listen(puerto, () => console.log('Corriendo servidor puerto ' + puerto));