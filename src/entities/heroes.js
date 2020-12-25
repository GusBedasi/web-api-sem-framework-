class Hero {
  constructor({ id, name, age, power }){
    this.id = Math.floor(Math.random() * 100) + Date.now()
    Object.assign(this, {name, age, power})
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this)
    const amountInvalid = propertyNames.map(property => 
      (!!this[property] ? null : `${property} is missing`)
    ).filter(item => !!item)

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid
    }
  }
  
}

module.exports = Hero

//const newHero = new Hero({ name: 'Chapolin', age: 86, power: 'Astucia' })
//console.log('Valid::', newHero.isValid())
//console.log('Hero::', newHero)