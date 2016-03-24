//Card object Model
function Card(){
    var Id 
    var Name 
    var Type 
    var Description 
    var Cost 
    var BaseAtack
    var BaseDefense
    var BaseEffect
    var MaxAtack
    var MaxDefense
    var CurrentAtack
    var CurrentDefense
    var CurrentEffect
    var FrontImage
    var BackImage
    var Status = []
//Setters
    function setId(id){
        this.Id = id
    }
    function setName(name){
        this.Name = name   
    }
    function setType(type){
        this.Type = type
    }
    function setDescription(description){
        this.Description = description  
    }
    function setCost(cost){
        this.Cost = cost 
    }
    function setBaseAtack(baseatack){
        this.BaseAtack = baseatack
    }
    function setBaseDefense(basedefence){
        this.basedefence = basedefence
    }
    function setBaseEffect(baseefect){
        this.BaseEffect = baseefect
    }
    function setMaxAtack(maxatack){
        this.MaxAtack = maxatack
    }
    function setMaxDefense(maxdefense){
        this.maxdefense = maxdefense
    }
    function setCurrentAtack(currentatack){
        this.CurrentAtack = currentatack
    }
    function setCurrentDefense(currentdefense){
        this.CurrentDefense = currentdefense
    }
    function setCurrentEffect(currenteffect){
        this.CurrentEffect = currenteffect
    }
    function setFrontImage(frontimage){
        this.FrontImage = frontimage
    }
    function setBackImage(backimage){
        this.BackImage = backimage
    }
    function addStatus(status){
        this.Status.push(status)
    }
    function removeStatus(status){
        for(var i = this.Status.length -1; i>=0;i--){
            if(this.Status[i] === status){
                this.Status.splice(i, 1)
            }
        }
    }
}