Message = require('../models/').Message;

module.exports = {
	// Get a list of all books using the model.findAll() method of sequelize
	index(req, res) {
		Message.findAll()
			.then(function(messages) {
				res.status(200).json(messages);
			})
			.catch(function(error) {
				res.status(500).json(error);
			});
	}, 
	// Get a single message based on it's unique ID using model.findById()
	show(req, res) {
		Message.findById(req.params.id)
			.then(function(message) {
				res.status(200).json(message);
			})
			.catch(function(error) {
				res.status(500).json(error);
			});
	},
	create(req, res) {
		Message.create(req.body)
			.then(function(newMessage) {
				res.status(200).json(newMessage);
			})
			.catch(function(error) {
				res.status(500).json(erro);
			});
	},
	update(req, res) {
		Message.update(req.body, {
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
		Message.destroy({
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