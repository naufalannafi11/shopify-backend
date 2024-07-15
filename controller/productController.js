const { Products } = require("../models");

module.exports.createProduct = async (req, res) => {
  try {
    const data = await Products.create(req.body);
    res.status(201).json({ Message: "Create Product success", Products : data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getProducts = async (req, res) => {
  try {
    const data = await Products.findAll();
    res.status(200).json({ Message: "get Products Success", Products : data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const data = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ Message: "get Product Success", Products : data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    const data = await Products.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await data.update(req.body);
    res.status(200).json({ Message: "Update Product Success", Products : data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const data = await Products.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
