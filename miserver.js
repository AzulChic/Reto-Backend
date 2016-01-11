//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarPosts = function(){
	var randomId = faker.internet.userName();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
  	id: randomId,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarPosts)
  res.json(usuarios);
})

app.get('/publicaciones', function (req, res) {
  res.send('Mis publicaciones');
})


app.listen(3000);