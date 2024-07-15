"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Transaction.belongsTo(models.Orders, {
        foreignKey: "orderId",
        as: "order",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Transaction.init(
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
      orderId: {
        type: DataTypes.UUID,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      transactionAmount: {
        type: DataTypes.INTEGER,
      },
      paymentMethod: {
        type: DataTypes.STRING,
      },
      status: {
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
      modelName: "Transaction",
    }
  );
  return Transaction;
};
