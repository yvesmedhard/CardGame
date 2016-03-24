//Deck Object Model
function Deck(){
    var Id
    var Name
    var User
    var Hero
    var Size
    var MaxSize
    var Cards = []
    var CurrentCards = []
    
    function setId(id){
        this.Id = id
    }
    function setName(name){
        this.Name = name
    }
    function setUser(user){
        this.User = user
    }
    function setHero(hero){
        this.Hero = hero
    }
    function setSize(size){
        this.Size = size
    }
    function setMaxSize(size){
        this.setMaxSize = size
    }
    function setCards(cards){
        this.Cards = cards
    }
    function setCurrentCards(currentcards){
        this.CurrentCards = currentcards
    }
    function addCard(card){
        this.Cards.push(card)
    }
}