var app = require('express')(),
	authors = require('./server/controllers/authors'),
	messages = require('./server/controllers/messages'),
  countries = require('./server/controllers/countries'),
  cities = require('./server/controllers/cities');;;;

//End points for authors ( USERS )
app.get('/authors', authors.index);
app.get('/authors/:id', authors.show);
app.post('/authors', authors.create);
app.put('/authors', authors.update);
app.delete('/authors', authors.delete);
//messages
app.get('/messages', messages.index);
app.get('/messages:id', messages.show);
app.post('/messages', messages.create);
app.delete('/messages', messages.delete);

//Countries
app.get('/countries', countries.index);
app.get('/countries:id', countries.show);
app.post('/countries', countries.create);
app.delete('/countries', countries.delete);

//cities
app.get('/cities', cities.index);
app.get('/cities:id', cities.show);
app.post('/cities', cities.create);
app.delete('/cities', cities.delete);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
	console.log("Server is running on port: ", app.get('port'));
});





/*
var models = require('./server/models/');

models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
});
*/