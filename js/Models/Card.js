//Card object Model

exports.Id
exports.Name
exports.Type
exports.Description
exports.Cost
exports.BaseAtack
exports.BaseDefense
exports.BaseEffect
exports.MaxAtack
exports.MaxDefense
exports.CurrentAtack
exports.CurrentDefense
exports.CurrentEffect
exports.FrontImage
exports.BackImage
exports.Status = []
//Setters

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
exports.setBaseAtack = function setBaseAtack(baseatack) {
    this.BaseAtack = baseatack
}
exports.setBaseDefense = function setBaseDefense(basedefence) {
    this.basedefence = basedefence
}
exports.setBaseEffect = function setBaseEffect(baseefect) {
    this.BaseEffect = baseefect
}
exports.setMaxAtack = function setMaxAtack(maxatack) {
    this.MaxAtack = maxatack
}
exports.setMaxDefense = function setMaxDefense(maxdefense) {
    this.maxdefense = maxdefense
}
exports.setCurrentAtack = function setCurrentAtack(currentatack) {
    this.CurrentAtack = currentatack
}
exports.setCurrentDefense = function setCurrentDefense(currentdefense) {
    this.CurrentDefense = currentdefense
}
exports.setCurrentEffect = function setCurrentEffect(currenteffect) {
    this.CurrentEffect = currenteffect
}
exports.setFrontImage = function setFrontImage(frontimage) {
    this.FrontImage = frontimage
}
exports.setBackImage = function setBackImage(backimage) {
    this.BackImage = backimage
}
exports.addStatus = function addStatus(status) {
    this.Status.push(status)
}
exports.removeStatus = function removeStatus(status) {
    for (var i = this.Status.length - 1; i >= 0; i--) {
        if (this.Status[i] === status) {
            this.Status.splice(i, 1)
        }
    }
}