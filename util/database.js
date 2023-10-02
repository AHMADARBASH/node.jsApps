const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'pass123', {
    dialect: 'mysql', host: 'localhost'
});


module.exports = sequelize;