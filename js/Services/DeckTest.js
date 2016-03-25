obj = require('../Models/Deck.js')

deck1 = obj
deck1.setId(1)
deck1.setName('Deck de Mago 1')
deck1.setUser(2)
deck1.setHero(1)
deck1.setSize(6)
deck1.setMaxSize(60)
deck1.setCards([1,2,3,4,5,6])
deck1.setCurrentCards([1,2,3,4,5,6])
deck1.addCard(7)
deck1.addCard(8)
deck1.addCard(9)
deck1.addCard(8)
deck1.removeCard(8)

deck1.saveDeck()
