"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.OrderItem, {
        foreignKey: "productId",
        as: "orderItems",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Products.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      stock: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      manufacturer: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
