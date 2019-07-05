const products = require("./node-1-afternoon/products.json.js");

const getProduct = (req, res) => {
  const item = products.find(val => val.id === parseInt(req.params.id));
  if (!item) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(item);
};

module.exports = getProduct;
