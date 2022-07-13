// apiFormatter
const apiFormatter = require("../apiFormatter");
const { writeFile } = require("fs");

// import data product
const products = require("../data.json");

// getDataProducts
const getDataProducts = (req, res) => {
  const data = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.status(200).json(apiFormatter("T", "Success", data));
};

// getDetailProduct
const getDetailProduct = (req, res) => {
  const { id } = req.params;

  const matchedId = products.find((product) => product.id === Number(id));

  if (!matchedId) {
    return res.status(401).json(apiFormatter("F", "No id matches"));
  }

  res.status(200).json(apiFormatter("T", "Success", matchedId));
};

// genDataProduct
const genDataProduct = (req, res) => {
  const { id, name, desc } = req.body;
  const data = { id, name, desc };

  products.push(data);

  let data2 = JSON.stringify(products);

  writeFile("./data.json", data2, (err) => {
    if (err) {
      res.status(401).json(apiFormatter("F", "Something went wrong!"));
    }
  });

  res.status(200).json(apiFormatter("T", "Success", data));
};

// updProduct
const updProduct = (req, res) => {
  const { id } = req.params;
  const { name, desc } = req.body;

  const selectedProduct = products.find((product) => product.id === Number(id));

  if (!selectedProduct) {
    return res.status(401).send(apiFormatter("F", "No id matches"));
  }

  const editedProduct = products.map((product) => {
    if (product.id === Number(id)) {
      product.name = name;
      product.desc = desc;
    }
    return product;
  });
  let data2 = JSON.stringify(editedProduct);

  writeFile("./data.json", data2, (err) => {
    if (err) {
      res.status(401).json(apiFormatter("F", "Something went wrong!"));
    }
  });
  res.status(200).json(apiFormatter("T", "Success"));
};

// delDataProduct
const delDataProduct = (req, res) => {
  const { id } = req.params;
  const selectedProduct = products.find((product) => product.id === Number(id));

  if (!selectedProduct) {
    return res.status(401).send(apiFormatter("F", "No id matches"));
  }

  let filteredProduct = products.filter((product) => product.id !== Number(id));
  let data2 = JSON.stringify(filteredProduct);

  writeFile("./data.json", data2, (err) => {
    if (err) {
      res.status(401).json(apiFormatter("F", "Something went wrong!"));
    }
  });
  res.status(200).json(apiFormatter("T", "Success"));
};

module.exports = {
  getDataProducts,
  getDetailProduct,
  genDataProduct,
  updProduct,
  delDataProduct,
};
