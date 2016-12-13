'use strict';

module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Specify that each county has cities
        // onDelete(county) cascade over cities
        Country.hasMany(models.City, {
          onDelete: 'cascade'
        })
      }
    }
  });
  return Country;
};