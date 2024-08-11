var connectionObj = require("./dbConnection").connect;
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

app.get("/showcart", (req, res) => {
  connectionObj((db) => {
    var query = { _id: 101 };
    db.collection("users")
      .find(query)
      .toArray((err, result) => {
        if (err) console.log("Error in getting cart items form users");
        else {
          var cartData = result[0].cart;
          var pizzaIds = [];
          var pizzaQuantity = [];
          var ingredientIds = [];
          var ingredientQuantity = [];

          console.log("cartData from api: ", cartData);
          // pizzaIds contain the id of pizzas in user cart

          cartData.forEach((cartItem) => {
            if (cartItem.hasOwnProperty("pizza_id")) {
              pizzaIds.push(cartItem.pizza_id);
              pizzaQuantity.push(cartItem.quantity);
            } else if (cartItem.hasOwnProperty("ingredient_id")) {
              ingredientIds.push(cartItem.ingredient_id);
              ingredientQuantity.push(cartItem.quantity);
            }
          });
          var totalAmount = result[0].cartAmount;
          console.log(totalAmount);
          console.log("pizzaIds ", pizzaIds);
          console.log("pizzaQuantity ", pizzaQuantity);

          console.log("ingredientIds", ingredientIds);
          console.log("ingredientQunatity", ingredientQuantity);

          // now getting the pizza details form pizzas collection
          db.collection("pizzas")
            .find({ id: { $in: pizzaIds } })
            .toArray((err, pizzaDetails) => {
              if (err)
                console.log(
                  "Error in getting pizzas form pizza table using pizza ids"
                );
              else {
                // result contains details of all pizzas in the cart of user & quantity as well
                pizzaDetails.forEach((doc, index) => {
                  doc["quantity"] = pizzaQuantity[index];
                });
                console.log(pizzaDetails);

                // getting ingredients details
                db.collection("ingredients")
                  .find({ id: { $in: ingredientIds } })
                  .toArray((err, ingredientsDetails) => {
                    if (err)
                      console.log(
                        "Error in getting ingredients from ingredients table using ingredients ids"
                      );
                    else {
                      // result contains details of all pizzas in the cart of user & quantity as well
                      ingredientsDetails.forEach((doc, index) => {
                        doc["quantity"] = ingredientQuantity[index];
                      });
                      res.send({
                        pizzaDetails,
                        ingredientsDetails,
                        totalAmount,
                      });
                    }
                  });
              }
            });
        }
      });
  });
});
app.listen(5000, () => {
  console.log("listending on port", 5000);
});