// Weapons
function Weapon(name, sharpness, durability, price, isBroke) {
  this.name = name;
  this.sharpness = sharpness;
  this.durability = durability;
  this.price = price;
  this.isBroke = isBroke;
}
Weapon.prototype.displayWeapons = () => {
  console.log(inventory.weapons);
};
let shortSword = new Weapon("Short Sword", 1, 50, 25, false);
let longSword = new Weapon("Long Sword", 1.5, 55, 40, false);
let cleaver = new Weapon("Cleaver", 1.75, 50, 50, false);
let demonTide = new Weapon("Demon Tide", 2, 100, 100, false);
let fatalKiss = new Weapon("Fatal Kiss", 2, 250, 500, false);
let handOfGod = new Weapon("God's Hand", 5, 500, 1000, false);
let fistOfJudgement = new Weapon("Fist of Judgement", 3, 1000, 1000, false);
shop.weapons.push(demonTide,longSword,cleaver,handOfGod,fatalKiss,fistOfJudgement);