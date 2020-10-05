const express = require("express");
const routes = express.Router();

const PersonController = require("./controller/PersonController");

routes.get("/persons", PersonController.findAll);
routes.get("/persons/:id", PersonController.findById);
routes.get("/persons/:name", PersonController.findByName);
routes.post("/persons/add", PersonController.create);
routes.delete("/persons/delete/:id", PersonController.delete);
routes.put("/persons/update/:id", PersonController.update);

module.exports = routes;