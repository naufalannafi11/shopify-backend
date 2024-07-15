const { Addresses } = require("../models");
const { Op } = require("sequelize");

module.exports.getAddresses = async (req, res) => {
  try {
    const data = await Addresses.findAll();
    res.status(200).json({ Message: "get Address Success", Addresses: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.createAddresses = async (req, res) => {
  try {
    const data = await Addresses.create(req.body);
    res.status(201).json({ Message: "Add Address Success",  Addresses: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getAddressesByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const data = await Addresses.findAll({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({ Message: "get Address Success",  Addresses: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateAddresses = async (req, res) => {
  try {
    const { id } = req.params;

    if (
      !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      )
    ) {
      return res.status(400).json({ error: "Invalid UUID format" });
    }

    let address = await Addresses.findByPk(id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }

    // Update the address
    await Addresses.update(req.body, {
      where: { id: id },
    });

    address = await Addresses.findByPk(id);

    res
      .status(200)
      .json({ message: "Address updated successfully", Addresses : address });
  } catch (error) {
    // Handle errors
    console.error("Error updating address:", error);
    res.status(500).json({ error: "Failed to update address" });
  }
};

module.exports.deleteAddresses = async (req, res) => {
  try {
    const { id } = req.params;
    if (
      !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      )
    ) {
      return res.status(400).json({ error: "Invalid UUID format" });
    }

    const address = await Addresses.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }

    await address.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal server error" });
  }
};
