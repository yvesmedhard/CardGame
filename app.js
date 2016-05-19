//Requires Modules
//
//Express Sample
/*
var express = require('express')(); //Requires Express module for Routing and REST management
express.get('/', function(req, res){
  res.send('hello world');
});
express.listen(3000);*/
//
//Open Sample
/*
var open = require('open')
open("http://www.fb.com");*/

//
//Test Models
//
    var Deck = require('./js/Models/Deck.js')
var User = require('./js/Models/User.js')
var Card = require('./js/Models/Card.js')
var Hero = require('./js/Models/Hero.js')

var card1 = new Card()
card1.Card(1,'Cavalga Lobo', 1,'Um goblin cavalgando um lobo', 2, 3, 1, 2, 3, 1, 3, 1, 2, 'cavalgalobo.img', 'defaultback.img', [2])
var card2 = new Card()
card2.Card(2,'Cavalga Lobo 2', 1,'Um goblin cavalgando um lobo', 2, 3, 1, 2, 3, 1, 3, 1, 2, 'cavalgalobo.img', 'defaultback.img', [2])
var card3 = new Card()
card3.Card(3,'Cavalga Lobo 3', 1,'Um goblin cavalgando um lobo', 2, 3, 1, 2, 3, 1, 3, 1, 2, 'cavalgalobo.img', 'defaultback.img', [2])
var card4 = new Card()
card4.Card(4,'Cavalga Lobo 4', 1,'Um goblin cavalgando um lobo', 2, 3, 1, 2, 3, 1, 3, 1, 2, 'cavalgalobo.img', 'defaultback.img', [2])

var hero1 =new Hero()
hero1.Hero(1, "Jaina", "Mago", "A maga de Darlaan", 0,0,0,0,0,0,"jaina.img",1,30,30,30) 
var hero2 =new Hero()
hero2.Hero(2, "Uthon", "Paladino", "O paladino divino", 0,0,0,0,0,0,"utheon.img",2,30,30,30)

hero2.setId(3)

var user1 = new User()
user1.setId(1)
user1.setName("Aramat")
user1.setEmail("Aramat@Aramat.com")
user1.setCards([card1.getId(),card2.getId(),card3.getId(),card4.getId()])

var deck1 = new Deck()
var deck2 = new Deck()
deck1.Deck(1, "Deck de mago", 1, hero1.getId(), 3, 60, [card1.getId(), card2.getId(), card3.getId()],[card1.getId(), card2.getId(), card3.getId()])
deck2.Deck(2, "Deck de Paladino", 1, hero2.getId(), 3, 60,[card2.getId(), card3.getId(),card4.getId()],[card2.getId(), card3.getId(),card4.getId()])

user1.setDecks([deck1.save(),deck2.save()])
user1.setHeroes([hero1.getId(), hero2.getId()])

console.log(user1.save())
