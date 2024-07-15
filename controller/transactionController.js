const { Transactions } = require("../models");

module.exports.createTransaction = async (req, res) => {
  try {
    const data = await Transactions.create(req.body);
    res.status(201).json({ msg: "Transaction created success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getTransactions = async (req, res) => {
  try {
    const data = await Transactions.findAll();
    res.status(200).json({ msg: "get Transactions Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getTransactionById = async (req, res) => {
  try {
    const data = await Transactions.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json({ msg: " Get Transaction Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateTransaction = async (req, res) => {
  try {
    const data = await Transactions.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    await data.update(req.body);
    res.status(200).json({ msg: " Update Transaction Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteTransaction = async (req, res) => {
  try {
    const data = await Transactions.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
