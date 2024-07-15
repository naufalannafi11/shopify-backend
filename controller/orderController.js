const { Orders, orderitem, transaction } = require("../models");

module.exports.createOrder = async (req, res) => {
  try {
    const data = await Orders.create(req.body);
    res.status(201).json({ Message: "Order created success", Orders: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const data = await Orders.findAll({
      include: [
        { model: orderitem, as: "OrderItems" },
        { model: transaction, as: "Transactions" },
      ],
    });
    res.status(200).json({ Message: "Get Orders Success", Orders: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id, {
      include: [
        { model: orderitem, as: "OrderItems" },
        { model: transaction, as: "Transactions" },
      ]
    });
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ Message: "Get Order Success", Orders: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    await data.update(req.body);
    res.status(200).json({ Message: " Update Order Success", Orders: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
