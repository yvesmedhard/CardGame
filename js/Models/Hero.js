//Hero Object Model
exports.Id
exports.Name
exports.Type
exports.Description
exports.BaseAttack
exports.BaseDefense
exports.MaxAttack
exports.MaxDefense
exports.CurrentAttack
exports.CurrentDefense
exports.FrontImage
exports.Hability
exports.BaseHealth
exports.MaxHealth
exports.CurrentHealth
//Setters
function Hero(id, name, type, description, baseattack, basedefence, maxattack, maxdefense, currentattack, currentdefense, frontimage, hability, basehealth, maxhealth, currenthealth) {
    return {
        Id: id,
        Name: name,
        Type: type,
        Description: description,
        BaseAttack: baseattack,
        BaseDefense: basedefence,
        MaxAttack: maxattack,
        MaxDefense: maxdefense,
        CurrentAttack: currentattack,
        CurrentDefense: currentdefense,
        FrontImage: frontimage,
        Hability: hability,
        BaseHealth: basehealth,
        MaxHealth: maxhealth,
        CurrentHealth: currenthealth,
    }
}

exports.setId = function setId(id) {
    this.Id = id
}
exports.setName = function setName(name) {
    this.Name = name
}
exports.setType = function setType(type) {
    this.Type = type
}
exports.setDescription = function setDescription(description) {
    this.Description = description
}
exports.setCost = function setCost(cost) {
    this.Cost = cost
}
exports.setBaseAttack = function setBaseAttack(baseattack) {
    this.BaseAttack = baseattack
}
exports.setBaseDefense = function setBaseDefense(basedefence) {
    this.basedefence = basedefence
}
exports.setMaxAttack = function setMaxAttack(maxattack) {
    this.MaxAttack = maxattack
}
exports.setMaxDefense = function setMaxDefense(maxdefense) {
    this.maxdefense = maxdefense
}
exports.setCurrentAttack = function setCurrentAttack(currentattack) {
    this.CurrentAttack = currentattack
}
exports.setCurrentDefense = function setCurrentDefense(currentdefense) {
    this.CurrentDefense = currentdefense
}
exports.setFrontImage = function setFrontImage(frontimage) {
    this.FrontImage = frontimage
}
exports.setHability = function setHability(hability) {
    this.Hability = hability
}
exports.setBaseHealth = function setBaseHealth(basehealth) {
    this.BaseHealth = basehealth
}
exports.setMaxHealth = function setMaxHealth(maxhealth) {
    this.MaxHealth = maxhealth
}
exports.setCurrentHealth = function setCurrentHealth(currenthealth) {
    this.CurrentHealth = currenthealth
}
exports.save = function save() {
    var user = JSON.stringify( Hero(this.Id, this.Name, this.Type, this.Description, this.BaseAttack, this.BaseDefense, this.MaxAttack, this.MaxDefense, this.CurrentAttack, this.CurrentDefense, this.FrontImage, this.Hability, this.BaseHealth, this.MaxHealth, this.CurrentHealth ))
    console.log(user)
    
}
