const Product = require("../models/product.models");
const User = require("../models/category.models");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products: products });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};

const deleteProduct = async (req, res) => { 
  const id = req.params.productid;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return res.json(deletedProduct);
  } catch (err) {
    return res.json(err);
  }
};

const updateProduct = async (req, res) => { 
  const id = req.params.productid;
  const data = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedProduct);
  } catch (err) {
    return res.json(err);
  }
};



const createProduct = async (req, res) => {
  try {
    //test 
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      ref: req.body.ref,
      category: req.body._id,
      description: req.body.description,
    });
    const savedProduct = await newProduct.save();
    return res.status(201).json({ product: savedProduct });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};


module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;

