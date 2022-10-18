import express from "express";
import apicontroller from '../controller/apicontroller'

let router = express.Router();

const initAPIRoute = (app) => {
  //   router.get("/", (req, res) => {
  //     res.render("index.ejs");
  //   });

  router.get("/orders", apicontroller.getAllOrders); //method GET -> Read data
  router.post("/createOrders", apicontroller.createOrders); //method POST -> create data
  router.put("/updateOrders", apicontroller.updateOrders); //method PUT -> update data
  router.delete("/deleteOrders/:id", apicontroller.deleteOrders); //method 
  return app.use("/api/v1", router);
};

export default initAPIRoute;

