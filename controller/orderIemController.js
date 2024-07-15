const { OrderItem } = require("../models");

module.exports.createOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.create(req.body);
    res.status(201).json({ Message: "Order item created success", OrderItem: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItems = async (req, res) => {
  try {
    const data = await OrderItem.findAll();
    res.status(200).json({ Message: "get Order item Success", OrderItem: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItemById = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    res.status(200).json({ Message: "Get Order item Success", OrderItem: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await data.update(req.body);
    res.status(200).json({ Message: "Update Order item Success", OrderItem: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Order item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
