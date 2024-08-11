var connectionObj = require("./dbConnection").connect;

var pizzasArray = require("./assets/Sample json/pizza.json");
var ingredientsArray = require("./assets/Sample json/ingredients.json");
// console.log(pizzas);
usersArray = [
    {
      _id: 101,
      name: "anas",
      contact: 1234567,
      email: "anas@gmail.com",
      cart: [
        { pizza_id: "0001", quantity: 1 },
        { pizza_id: "demo_id_12", quantity: 1 },
      ],
    },
    {
      _id: 102,
      name: "varun",
      contact: 9786354,
      email: "varun@gmail.com",
      cart: [
        { pizza_id: "0004", quantity: 1 },
        { pizza_id: "demo_id_22", quantity: 2 },
      ],
    },
    {
      _id: 103,
      name: "rahul",
      contact: 7654321,
      email: "rahul@gmail.com",
      cart: [
        { pizza_id: "0006", quantity: 2 },
        { pizza_id: "demo_id_32", quantity: 1 },
      ],
    },
  ];
connectionObj((db) => {
  db.collection("pizzas").insertMany(pizzasArray, (err, result) => {
    if (err) console.log("Error adding data", err);
    else console.log("Data added to pizzas successfully");
  });
  db.collection("ingredients").insertMany(ingredientsArray, (err, result) => {
    if (err) console.log("Error adding data", err);
    else console.log("Data added to ingredients successfully");
  });
  db.collection("users").insertMany(usersArray, (err, result) => {
    if (err) console.log("Error adding data", err);
    else console.log("Data added to users successfully");
  });
});
