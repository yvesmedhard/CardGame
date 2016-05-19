module.exports = function () {
    
    this.TurnStart = function (player, deck, hand, field, graveyard) {
        
    }
    this.PlayerPhase = function (params) {
        timerStart()
        unlock()
    }    
    this.TurnEnd = function (params) {

    }    
    //Draw first Card from a Sorce and puts in the end of the Destination
    //Draw a specific Card from a Source and put it in the end of the Destination
    this.MoveCard = function(source, destination, cardId) {
      if(cardId>0){
      destination.push(source[source.indexOf(cardId)])
      source.splice(source.indexOf(cardId), 1)
      }else{
          destination.push(source.shift())
    }}
    function Atack(params) {
        
    }    
    function UpdateStatus(params) {
        
    }
    
    function CheckEffects(params) {
        
    }
    function RemoveEffect(params) {
        
    }
    function AddEffect(params) {
        
    }
}
