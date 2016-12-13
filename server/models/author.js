'use strict';
module.exports = function(sequelize, DataTypes) {
  //Defining Author model
  var Author = sequelize.define('Author', {
    //Defining the datatypes of an author
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    //Setting the timestamps (created_at, updated_at) to be underscored.
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // An author(user can have many messages)
        // On delete cascade ensures that when we we delete a user it's associatied messsages are also deleted.
        Author.hasMany(models.Message, {
          onDelete: 'cascade'
        })
      }
    }
  });
  return Author;
};