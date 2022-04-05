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
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//GET: obtener/devolver datos de la aplicación.
//POST: enviar datos (insertar nuevo usuário / o petición de pedidos de un usuário).
//PUT: actualizar informaciones (datos).
//DELETE: eliminar datos.

//API:
//server.get("/", (req, res)=>{
//console.log("petición a la ruta get/");
//res.send("<html><body><h1>Hola</h1></body></html>");
//});

//GET:
server.get("/customers", (req, res) => {
  console.log("petición GET a customers");
  const response = {
    customers: [
      {
        name: "Jorge",
        surname: "Perez",
        email: "jorge_perez@gmail.com",
        birthdate: "10/07/0970",
      },
    ],
  };
  res.json(response);
});

//POST:
server.post("customers/add", (req, res) => {
  console.log("new customers add");
});

//PUT:
server.put("customers/update", (req, res) => {
    console.log("customer update");
  });

//DELETE:
server.delete("customers/delete", (req, res) => {
  console.log("customer deleted");
});
