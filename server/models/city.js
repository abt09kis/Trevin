'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Many users can be in the city.
        City.hasMany(models.Author);
        //Each city belongs to only one Country
        City.belongsTo(models.Country);
      }
    }
  });
  return City;
};