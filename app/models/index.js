const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://lorkxaig:gIeqHnPTDwFhOmCr3ayRuPbNpTbIAqaA@satao.db.elephantsql.com:5432/lorkxaig');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;