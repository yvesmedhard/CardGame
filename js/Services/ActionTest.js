var obj = require('../Models/Action.js')

var action = new obj()


var s = [1, 2, 3]
var d = []

action.MoveCard(s, d, 2)
action.MoveCard(s, d)

console.log(s)
console.log(d)
