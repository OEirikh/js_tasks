
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {

    for (const potion of this.potions) {
      if (potionName === potion.name) {
        return `Potion ${potionName} is already equipped!`;
      }
    }
    // if (this.potions.includes(potionName)) {
    //   return `Potion ${potionName} is already equipped!`;
    // }
    this.potions.push(potionName);
  },

  removePotion(potionName) {

    for (let i = 0; i < this.potions.length; i+=1 ) {
      if (potionName === this.potion[i].name) {
       
        this.potion.splice(i, 1)
        
      }
       
    }
      return `Potion ${potionName} is not in inventory!`;

    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    this.potions.splice(potionIndex, 1);
  },

  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        return potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line

};
console.log(atTheOldToad.getPotions());