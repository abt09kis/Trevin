City = require('../models').City;
Author = require('../models').Author;

module.exports = {
    //Retrieve a list of all Cities using model.findAll()

    index(req, res) {
        City.findAll({
            include: Author
        })
        .then(function(cities) {
            res.status(200).json(cities);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });

    }, 

    // Try to retrieve a city based on it's unique ID.
    // Define include: Authors(users) in order to get Authors based on the cities ID.

    show(req, res) {
        City.findById(req.params.id, {
            include: Author
        })
        .then(function(city) {
            res.status(200).json(city);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },

    create(req, res) {
        City.create(req.body)
        .then(function(newCity){
            res.status(200).json(newCity);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },

    update(req, res) {
        City.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(updatedRecords) {
            res.status(200).json(updatedRecords);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },

    delete(req, res) {
        City.destroy({
            where: {
                id: res.params.id
            }
        })
        .then(function(deletedRecords) {
            res.status(200).json(deletedRecords);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    }
};