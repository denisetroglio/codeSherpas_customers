//importar dependencias
const express = require("express");
const cors = require("cors");

//crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () => console.log(`Server listening at http://localhost:${serverPort}`));