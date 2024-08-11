var connectionObj = require("./dbConnection").connect;
const bodyParser = require("body-parser");
var express = require("express");
var cors=require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/deleteitem", (req, res) => {
  connectionObj((db) => {
    /* accepting the pizza id and amount from ui that need to be removed from the cart
     of current user or user specified... let's descide islater*/
    const pizzaId = req.body.pizzaId;
    const pizzaAmount = req.body.pizzaprice;
    db.collection("users").updateOne(
      { _id: 101 }, // will try to get the user id from ui.
      {
        $pull: { cart: { pizza_id: pizzaId } },
        $inc: { cartAmount: -pizzaAmount },
      },
      (err, result) => {
        if (err) console.log("Error deleting the data form user cart");
        else {
          console.log("Item Removed from cart succesfully");
          res.send(result);
        }
      }
    );
  });
});
app.listen(3500, () => {
  console.log("listending on port", 3500);
});
