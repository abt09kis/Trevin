Author = require('../models').Author;
Message = require('../models').Message;


module.exports = {

	//Get a list of all authors(Users!!) using model.findAll()
	index(req, res)	{
		Author.findAll({
			include: Message
		})
		.then(function(authors) {
			res.status(200).json(authors);
		})
		.catch(function(error) {
			res.status(500).json(error);
		});
	},

	//Get an Author(user) by the unique ID using model.findById()
	// By defining include message here we try to get the message based on it's author's ID
	// So it will try to retrive a message based on author_id same goes for the above index() method.
	show(req,res) {
		Author.findById(req.params.id, {
			include: Message
		})
		.then(function(author) {
			res.status(200).json(author);
		})
		.catch(function(error) {
			res.status(500).json(error);
		});
	},

	//Create a new Author(User) details using model.update()
	create(req, res) {
		Author.create(req.body)
		.then(function(newAuthor) {
			res.status(200).json(newAuthor);
		})
		.catch(function(error) {
			res.status(500).json(error);
		});
	},

	update(req, res) {
		Author.update(req.body, {
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

	//Delete an existing Author(user) by the unique ID using model.destroy()

	delete(req, res) {
		Author.destroy({
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