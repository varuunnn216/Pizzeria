var connectionObj = require("./dbConnection").connect;
const bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //in case of post request

app.post("/insertpizza", (req, res) => {
  connectionObj((db) => {
    pizzaId = req.body.pizzaid;
    pizzaPrice = parseFloat(req.body.pizzaprice);
    db.collection("users").updateOne(
      { _id: 101 },
      {
        $push: {
          cart: {
            pizza_id: pizzaId,
            quantity: 1,
          },
        },
        $inc: {
          cartAmount: pizzaPrice,
        },
      },
      (err, result) => {
        if (err) console.log("Error adding pizza data to cart", err);
        else {
          console.log(pizzaId, " pizza is added to cart of user");
          res.send(result);
        }
      }
    );
  });
});
app.post("/insertingredients", (req, res) => {
  connectionObj((db) => {
    ingredientId = req.body.ingredientId;
    ingredientPrice = parseFloat(req.body.ingredientPrice);
    db.collection("users").updateOne(
      { _id: 101 },
      {
        $push: {
          cart: {
            ingredient_id: ingredientId,
            quantity: 1,
          },
        },
        $inc: {
          cartAmount: ingredientPrice,
        },
      },
      (err, result) => {
        if (err) console.log("Error adding Ingredient data to cart", err);
        else {
          console.log(ingredientId, " ingredient is added to cart of user");
          res.send(result);
        }
      }
    );
  });
});

app.listen(4000, () => {
  console.log("listending on port", 4000);
});
