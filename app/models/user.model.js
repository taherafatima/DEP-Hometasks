module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [3, 30]
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [6, 12]
      }
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 4,
        max: 130,
      }
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false

    }
  });

  return User;
};