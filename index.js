const express = require("express");

//create express app
const app = express();
const bodyParser = require("body-parser");

const productData = require("./data");

//port at which the server will run
const port = 4000;

app.get("/category/:slug", async (req, res) => {
  const { slug } = req.params;
  let productList = [];
  productData.map((product) => {
    if (product.category === slug) {
      productList.push(product);
    }
  });
  console.log(productList);

  res.send(productList);
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  res.send(productData.find((x) => x.id === id));
});

//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
