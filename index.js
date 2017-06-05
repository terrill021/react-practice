/*
*
*/

import express from 'express';
import http from 'http';
import engine from 'socket.io';

const port = 3000;
const app = express();

//configurar la ruta de archivos estaticos
//__dirname = ruta contexto de este archivo
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

let server = http.createServer(app).listen(port, () => {
	console.log(`el servidor escucha en el puerto : ${port}`);
});