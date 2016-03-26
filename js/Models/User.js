var equals = require('array-equal')
//this file holds the user
exports.Id
exports.Name
exports.Email
exports.Cards = []
exports.Decks = []
exports.Heroes = []

function User(id, name, email, cards, decks, heroes) {
    return {
        Id: id,
        Name: name,
        Email: email,
        Cards: cards,
        Decks: decks,
        Heroes: heroes
    }
}

exports.setId = function setId(id) {
    this.Id = id
}
exports.setName = function setName(name) {
    this.Name = name
}
exports.setEmail = function setEmail(email) {
    this.Email = email
}
exports.setCards = function setCards(cards) {
    this.Cards = cards
}
exports.setDecks = function setDecks(decks) {
    this.Decks = decks
}
exports.setHeroes = function setHeroes(heroes) {
    this.Heroes = heroes
}
exports.addCard = function addCard(card) {
    this.Cards.push(card)
}
exports.addDeck = function addDeck(deck) {
    this.Decks.push(deck)
}
exports.addHero = function addHero(hero) {
    this.Heroes.push(hero)
}
exports.removeCard = function removeCard(card) {
    for (var i = this.Cards.length - 1; i >= 0; i--) {
        if (this.Cards[i] === card) {
            this.Cards.splice(i, 1)
            break
        }
    }
}
exports.removeDeck = function removeDeck(deck) {
    for (var i = this.Decks.length - 1; i >= 0; i--) {
        if (equals(this.Decks[i], deck)) {
            this.Decks.splice(i, 1)
            break
        }
    }
}
exports.removeHero = function removeHero(hero) {
    for (var i = this.Heroes.length - 1; i >= 0; i--) {
        if (this.Heroes[i] === hero) {
            this.Heroes.splice(i, 1)
            break
        }
    }
}
exports.save = function save() {
    var user = JSON.stringify(User(this.Id, this.Name, this.email, this.Cards, this.Decks, this.Heroes))
    console.log(user)
}