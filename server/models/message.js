'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    from_user: DataTypes.STRING,
    to_user: DataTypes.STRING,
    contents: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    // Enables snake_case for created_at and update_at
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Message;
};