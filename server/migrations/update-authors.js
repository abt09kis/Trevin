'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.addColumn('Authors', 'city_id',{
            type: Sequelize.INTEGER,
            references: {
                model: 'Cities',
                key: 'id'
            },
            onUpdate: 'cascade'
        })
    },

    down: function(queryInterface, Sequelize) {
        return;
  }
};