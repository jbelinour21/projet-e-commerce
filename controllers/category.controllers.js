const Category = require("../models/category.models");

const updateCategory = async (req, res) => {   
    const id = req.params.categoryid;
    const data = req.body;
    try {
      const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });
      return res.json(updatedCategory);
    } catch (err) {
      return res.json(err);
    }
  };
const createCategory = async (req, res) => {  
    try {
    
      const newCategory = new Category({
        title: req.body.title,
        brand: req.body.brand,
        product: req.body._id,

      });
      const savedCategory = await newCategory.save();
      return res.status(201).json({ category: savedCategory });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };
const deleteCategory = async (req, res) => {  
    const id = req.params.categoryid;
    try {
      const deletedCategory = await Category.findByIdAndDelete(id);
      return res.json(deletedCategory);
    } catch (err) {
      return res.json(err);
    }
  };

  const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json({ categories: categories });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };

module.exports.createCategory = createCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;
module.exports.getCategories = getCategories;