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

//API Endpoints:

// 1 - Create a new customer:

server.post("/customer", (req, res) => {
  const query = db.prepare(
    "INSERT INTO customers (name, surname, email, birthdate) VALUES (?,?,?,?)"
  );
  const result = query.run(
    "Dayana",
    "Serrano",
    "dayana_s@hotmail.com",
    "17/04/1975"
  );
  res.json(result);
  console.log(result);
}); //Se ha añadido el usuário con id= 7.

// 2 - Get a single customer with all the attributes:

server.get("/customer/customer.id", (req, res) => {
  console.log("get a single customer");
  const query = db.prepare("SELECT * FROM customers WHERE id=3");
  const customersId = query.get();
  res.json(customersId);
}); //Se pinta el usuário con id=3.

// 3 - Get all customers:
server.get("/customer", (req, res) => {
  console.log("get all customers");
  const query = db.prepare("SELECT * FROM customers");
  const customers = query.all();
  res.json(customers);
}); //Se pintan todos los usuários de la tienda.

// 4 - Update all the attributes (at once) of an existing customer:
server.post("/customer/customer.id", (req, res) => {
  const query = db.prepare(
    "UPDATE customers SET name= ?, surname= ?, email= ?, birthdate= ? WHERE id= ?"
  );
  const updateCustomer = query.run(
    "Carla",
    "Garcia",
    "carla.garcia@gmail.com",
    "23/07/1986",
    4
  );
  res.json(updateCustomer);
 console.log("updating a customer");
}); //Se cambia Carlos por Carla.

// 5 - Delete an existing customer:

server.delete("/customer/customer.id", (req, res) => {
  const query = db.prepare("DELETE FROM customers WHERE id =?");
  const result = query.run(req.body.id);
  console.log(result);
  if (result.changes === 1) {
    res.json({
      result: "User deleted",
    });
  } else {
    res.status(404).json({
      result: "User not found",
    });
  }
});
