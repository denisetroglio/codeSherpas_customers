//importar dependencias
const express = require("express");
const cors = require("cors");
const dataBase = require("better-sqlite3");

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

//archivo de la base de datos:
const db = dataBase("./src/customers_database.db", { verbose: console.log });

// 1 - Create a new customer:


// 2 - Get a single customer with all the attributes:

server.get("/customersid", (req, res) => {
  console.log("get a single customer");
  const query = db.prepare("SELECT * FROM customers WHERE id=3");
  const customersId = query.all();
  res.json(customersId);
});

// 3 - Get all customers:
server.get("/customers", (req, res) => {
  console.log("get all customers");
  const query = db.prepare("SELECT * FROM customers");
  const customers = query.all();
  res.json(customers);
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

//GET: obtener/devolver datos de la aplicación.
//POST: enviar datos (insertar nuevo usuário / o petición de pedidos de un usuário).
//PUT: actualizar informaciones (datos).
//DELETE: eliminar datos.
