//this is the game table where the game is played
/*Mesa é composta de 
Jogadores
Mesas
Mãos
Decks
Heróis
Histórico de ações
Turnos


Ordem das coisas
Começo do jogo
    Jogadores são carregados
    Roda a iniciativa => Turnos são definidos
    Inicio dos turnos
Turnos  
    Fase de Draw
        Carta é puxada
        se cristal de mana <10 cristal de mana é concedido
        cristais de mana são recarregados
        Efeitos de inicio de turno aplicados
    Fase de ações do jogador
        Jogador pode jogar suas cartas
        Jogador finaliza o turno
    Fase de fim de turno
        Efeitos de fim de turno são aplicados
        Turno é encerrado
*/
module.exports = function() {
    var Player1
    var Player2
    var Deck1
    var Deck2
    var Hand1
    var Hand2
    var Hero1
    var Hero2
    var Field1
    var Field2
    var Graveyard

    //Getters and Setters
    this.setPlayer1 = function(obj) { Player1 = obj }
    this.setPlayer2 = function(obj) { Player2 = obj }
    this.setDeck1 = function(obj) { Deck1 = obj }
    this.setDeck2 = function(obj) { Deck2 = obj }
    this.setHand1 = function(obj) { Hand1 = obj }
    this.setHand2 = function(obj) { Hand2 = obj }
    this.setHero1 = function(obj) { Hero1 = obj }
    this.setHero2 = function(obj) { Hero2 = obj }
    this.setTabletop1 = function(obj) { Field1 = obj }
    this.setTabletop2 = function(obj) { Field2 = obj }
    this.setGraveyard = function(obj) { Graveyard = obj }
    this.getPlayer1 = function() { return Player1 }
    this.getPlayer2 = function() { return Player2 }
    this.getDeck1 = function() { return Deck1 }
    this.getDeck2 = function() { return Deck2 }
    this.getHand1 = function() { return Hand1 }
    this.getHand2 = function() { return Hand2 }
    this.getHero1 = function() { return Hero1 }
    this.getHero2 = function() { return Hero2 }
    this.getTabletop1 = function() { return Field1 }
    this.getTabletop2 = function() { return Field2 }
    this.getGraveyard = function() { return Graveyard }

    this.Match = function(player1, player2, deck1, deck2, hand1, hand2, hero1, hero2, field1, field2, graveyard) {
        Player1 = player1
        Player2 = player2
        Deck1 = deck1
        Deck2 = deck2
        Hand1 = hand1
        Hand2 = hand2
        Hero1 = hero1
        Hero2 = hero2
        Field1 = field1
        Field2 = field2
        Graveyard = graveyard
    }
    
    
}