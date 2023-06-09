'use strict';

const rideModel = (sequelize, DataTypes) => sequelize.define('ride', {
  name: { type: DataTypes.STRING, allowNull: false },
  heightRequirement: { type: DataTypes.ENUM('None', 'Short', 'Medium', 'Tall') },
  waitTimes: { type: DataTypes.ENUM('None', '< 60 mins', '60+ mins'), defaultValue: 'None' },
});

module.exports = rideModel;
