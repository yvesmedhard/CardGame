//Deck Object Model

exports.Id
exports.Name
exports.User
exports.Hero
exports.Size
exports.MaxSize
exports.Cards = []
exports.CurrentCards = []

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
}