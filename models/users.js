"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: "userId",
        as: "orders",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Users.hasMany(models.Addresses, {
        foreignKey: "userId",
        as: "Addresses",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Users.hasMany(models.Transactions, {
        foreignKey: "userId",
        as: "transactions",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Users.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      phoneNumber: {
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
      modelName: "Users",
    }
  );
  return Users;
};
