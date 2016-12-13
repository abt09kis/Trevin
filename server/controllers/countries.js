Country = require('../models').Country;
City = require('../models').City;

module.exports= {
    

    //Get a list of all Countries using model.findAll()

    index(req, res) {
        Country.findAll({
            include: City
        })
        .then(function(countries) {
            res.status(200).json(countries);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Get a Country by it's unique id using model.findById()
    //By defining include city we try to retrieve a list of cities that belonng to the country.
    //Will try to retrieve message based on Country_id
    show(req, res) {
        Country.findById(req.params.id, {
            include: City
        })
        .then(function(country) {
            res.status(200).json(country)
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res) {
        Country.create(req.body)
        .then(function(newCountry) {
            res.status(200).json(newCountry);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },

    update(req, res) {
        Country.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(updatedRecords){
            res.status(200).json(updatedRecords);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },

    delete(req, res) {
        Country.destroy({
            where: {
                id: req.params.id
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