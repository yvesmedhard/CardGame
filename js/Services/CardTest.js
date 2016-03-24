//Test of Card Class
var obj = require('../Models/Card.js')


var card1 = obj
card1.setId(1)
card1.setName(`Arrota Lodo`)
card1.setType(`Neutro`)
card1.setDescription(`Ele arrota lodo em você`)
card1.setCost('3')
card1.setBaseAtack('2')
card1.setBaseDefense('3')
card1.setBaseEffect()
card1.setMaxAtack('2')
card1.setMaxDefense('3')
card1.setCurrentAtack('2')
card1.setCurrentDefense('3')
card1.setCurrentEffect()
card1.setFrontImage('ArrotaLodo.img')
card1.setBackImage('DeckBack.img')
card1.addStatus(1)
card1.addStatus(2)
card1.addStatus(3)
card1.addStatus(2)
card1.removeStatus(2)


console.log(card1)
 
