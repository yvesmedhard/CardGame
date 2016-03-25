
var JSON2 = require('JSON2')
//Deck Object Model

exports.Id
exports.Name
exports.User
exports.Hero
exports.Size
exports.MaxSize
exports.Cards = []
exports.CurrentCards = []

function Deck(id, name, user, hero, size, maxsize, cards, currentcards){
    return{
    Id : id,
    Name : name,
    user : user,
    Hero : hero,
    Size : size,
    MaxSize : maxsize,
    Cards : cards,
    CurrentCards : currentcards
    }
}

exports.setId = function setId(id) {
    this.Id = id
}
exports.setName = function setName(name) {
    this.Name = name
}
exports.setUser = function setUser(user) {
    this.User = user
}
exports.setHero = function setHero(hero) {
    this.Hero = hero
}
exports.setSize = function setSize(size) {
    this.Size = size
}
exports.setMaxSize = function setMaxSize(size) {
    this.setMaxSize = size
}
exports.setCards = function setCards(cards) {
    this.Cards = cards
}
exports.setCurrentCards = function setCurrentCards(currentcards) {
    this.CurrentCards = currentcards
}
exports.addCard = function addCard(card) {
    this.Cards.push(card)
    this.CurrentCards.push(card)
}
exports.loadDeck = function loadDeck(deck){
    var deck = JSON2.parse(card)
}
exports.saveDeck = function saveDeck(){
   var deck =  Deck(this.Id, this.Name, this.User, this.Hero, this.Size, this.MaxSize, this.Cards,this.CurrentCards)
   console.log(JSON2.stringify(deck))
}
exports.removeCard = function removeCard(card){
     for (var i = this.Cards.length - 1; i >= 0; i--) {
        if (this.Cards[i] === card) {
            this.Cards.splice(i, 1)
        }
    }
    this.CurrentCards = this.Cards
}