var connectionObj = require("./dbConnection").connect;
const bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
 
// api to increment and decrement the quantity from cart.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //in case of post request
 
app.post("/increaseQuantity", (req, res) => {
  const id = req.body.id; // Assuming the pizzaId is sent in the request body
  const price = parseFloat(req.body.price);
  connectionObj((db) => {
    db.collection("users").updateOne(
      {
        _id: 101,
        $or: [{ "cart.pizza_id": id }, { "cart.ingredient_id": id }],
      },
      { $inc: { "cart.$.quantity": 1, cartAmount: price } },
      (err, result) => {
        if (err) {
          console.log("error increasing the quantity");
          res.status(500).send("Error increasing the quantity");
        } else {
          console.log("Quantity increased for pizza/ingredient with ID:", id);
          db.collection("users")
            .aggregate([
              { $match: { _id: 101 } },
              { $unwind: "$cart" },
              {
                $match: {
                  $or: [{ "cart.pizza_id": id }, { "cart.ingredient_id": id }],
                },
              }, // can edit here...
            ])
            .toArray((err, result) => {
              if (err)
                console.log(
                  "error fetching the quantity after increasing count"
                );
              else {
                console.log(
                  "quanitty after increment is:",
                  result[0].cart.quantity
                );
                res.send(result);
              }
            });
        }
      }
    );
  });
});
// Endpoint to decrease the quantity of a pizza in the cart
app.post("/decreaseQuantity", (req, res) => {
  const id = req.body.id; // Assuming the pizzaId is sent in the request body
  const price = parseFloat(req.body.price);
  connectionObj((db) => {
    db.collection("users").updateOne(
      {
        _id: 101,
        $or: [{ "cart.pizza_id": id }, { "cart.ingredient_id": id }],
      },
      { $inc: { "cart.$.quantity": -1, cartAmount: -price } }, // Using -1 to decrement the quantity
      (err, result) => {
        if (err) {
          console.log("Error decreasing the quantity", err);
          res.status(500).send("Error decreasing the quantity");
        } else {
          console.log("Quantity decreased for pizza with ID:", pizzaId, result);
          db.collection("users")
            .aggregate([
              { $match: { _id: 101 } },
              { $unwind: "$cart" },
              { $match: { "cart.pizza_id": id } },
            ])
            .toArray((err, result) => {
              if (err)
                console.log("error fetching the quantity after reducing count");
              else {
                // console.log("quanitty after deduction is:", result);
                console.log(
                  "quanitty after deduction is:",
                  result[0].cart.quantity
                );
                res.send(result);
              }
            });
        }
      }
    );
  });
});
app.listen(7000, () => {
  console.log("listending on port", 7000);
});
 