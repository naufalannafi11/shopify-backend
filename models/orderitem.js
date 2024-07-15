"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.Orders, {
        foreignKey: "orderId",
        as: "order",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      OrderItem.belongsTo(models.Products, {
        foreignKey: "productId",
        as: "product",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  OrderItem.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.UUID,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.UUID,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      option: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
      },
      subTotal: {
        type: DataTypes.INTEGER,
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
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
