'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.addColumn('Cities', 'country_id',{
            type: Sequelize.INTEGER,
            references: {
                model: 'Countries',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    },

    down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Cities');
  }
};