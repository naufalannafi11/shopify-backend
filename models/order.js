"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Orders.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        as: "orderItems",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Orders.hasMany(models.Transactions, {
        foreignKey: "orderId",
        as: "transactions",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Orders.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      },
      totalPrice: {
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
      modelName: "Orders",
    }
  );
  return Orders;
};
