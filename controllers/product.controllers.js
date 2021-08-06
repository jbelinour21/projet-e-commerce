const Product = require("../models/product.models");
const Category = require("../models/category.models");
const getProducts = async (req, res) => {

  try {
    const products = await Product.find();
    return res.status(200).json({ products: products });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const getProductById = async (req, res) => {
  const id = req.params.productid;
  try {
    const product = await Product.findById(id);
    return res.json(product);
  } catch (err) {
    return res.json(err);
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
    const newCategory = new Category({
      title: req.body.title,
      brand: req.body.brand,
    });
    const savedCategory = await newCategory.save();
    
    
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      ref: req.body.ref,
      category: savedCategory._id,
      description: req.body.description,
      countInStock: req.body.countInStock,
      imageUrl: req.body.imageUrl,
    });
    const savedProduct = await newProduct.save();
    return res.status(201).json({ product: savedProduct });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};

const getProducteByBrand = async (req, res) => {
  const productBrand = req.params.productBrand;
  try {
    const invoice = await Invoice.findOne({ reference: invoiceRef }).populate({
      path: "buyer",
      select: "firstName lastName",
    });
    return res.status(200).json({ invoice: invoice });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};

const getProductAutoComplete = async (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 5;
  const q = req.query.q !== "" ? req.query.q : "";

  try {
    const products = await Product.find({
      ref: { $regex: `.*${q}.*` },
    })
      .limit(pagination)
      .sort({ createdAt: 1 });

    return res.status(200).json({ products: products });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};

module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProductAutoComplete = getProductAutoComplete;
module.exports.getProductById = getProductById;

