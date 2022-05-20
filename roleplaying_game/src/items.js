let shop = { items: [], weapons: [], equipment: [], spells: [], gold: 1000 };
function Item(id, name, effect, price) {
  this.id = id;
  this.name = name;
  this.effect = effect;
  this.price = price;
}
Item.prototype.displayItems = () => {
  console.log(inventory.items);
};
let potion = new Item(
  1,
  "Healing Potion",
  `Replenish your weary soul(Adds 500 to Health).`,
  10
);
let bomb = new Item(
  2,
  "Dynamite!",
  `A good way to keep enemies at bay! (Inflicts 750 damage to enemy health).`,
  15
);
let attackUp = new Item(
  3,
  "Carinthian Tonic",
  "Gain Immense Power (Attack Power + 250)",
  25
);
let defenseUp = new Item(
  4,
  "BonTooine Tonic",
  "Rock Solid Defense (Defense + 500)",
  25
);
shop.items.push(potion, bomb, attackUp, defenseUp);

// Weapons
function Weapon(name, sharpness, durability, price, isBroke, id) {
  this.id = id;
  this.name = name;
  this.sharpness = sharpness;
  this.durability = durability;
  this.price = price;
  this.isBroke = isBroke;
}
Weapon.prototype.displayWeapons = () => {
  console.log(inventory.weapons);
};
let fist = new Weapon("Fists", 0.25, 10, 5, false, 1);
let teeth = new Weapon("Teeth", 0.5, 15, 10, false, 2);
let claw = new Weapon("Claws", 0.75, 25, 20, false, 3);
let horns = new Weapon("Horns", 2, 50, 25, false, 4);
let shortSword = new Weapon("Short Sword", 1, 50, 25, false, 5);
let longSword = new Weapon("Long Sword", 1.5, 55, 40, false, 6);
let cleaver = new Weapon("Cleaver", 1.75, 50, 35, false, 7);
let greatSword = new Weapon("Great Sword", 1.75, 75, 45, false, 8);
let demonTide = new Weapon("Demon Tide", 2, 100, 100, false, 9);
let fatalKiss = new Weapon("Fatal Kiss", 2.25, 75, 100, false, 10);
let handOfGod = new Weapon("God's Hand", 5, 500, 1000, false, 11);
let fistOfJudgement = new Weapon("Fist of Judgement", 3, 1000, 1000, false, 12);
shop.weapons.push(
  demonTide,
  longSword,
  cleaver,
  handOfGod,
  fatalKiss,
  fistOfJudgement,
  claw,
  teeth,
  greatSword,
  fist,
  horns
);

// Equipment
function Equip(name, durability, defense, price, isBroke, id) {
  this.id = id;
  this.name = name;
  this.durability = durability;
  this.defense = defense;
  this.price = price;
  this.isBroke = isBroke;
}
Equip.prototype.displayEquipment = () => {
  console.log(inventory.equipment);
};
let vest = new Equip("Leather Vest", 75, 25, 15, false);
let lightArmor = new Equip("Chain Mail", 150, 50, 50, false);
let heavyArmor = new Equip("Plate Mail", 300, 100, 100, false);
shop.equipment.push(vest, lightArmor, heavyArmor);

// Spells
function CreateSpell(name, effect, damage, duration, grade, price, id) {
  this.id = id;
  this.name = name;
  this.effect = effect;
  this.damage = damage;
  this.duration = duration;
  this.grade = grade;
  this.price = price;
}
CreateSpell.prototype.displaySpells = () => {
  console.log(player.inventory.spells);
};
let fire = new CreateSpell(
  "Fire",
  "Inflict minor burn ailment",
  10,
  "Five",
  "One",
  25
);
let blizzard = new CreateSpell(
  "Blizzard",
  "Inflict minor freeze ailment",
  10,
  "Five",
  "One",
  25
);
let thunder = new CreateSpell(
  "Thunder",
  "Inflict minor shock ailment",
  10,
  "Five",
  "One",
  25
);
let fira = new CreateSpell(
  "Fira",
  "Inflict moderate burn ailment",
  50,
  "Five",
  "Two",
  25
);
let blizzara = new CreateSpell(
  "Blizzara",
  "Inflict moderate freeze ailment",
  50,
  "Five",
  "Two",
  25
);
let thundara = new CreateSpell(
  "Thundara",
  "Inflict moderate shock ailment",
  50,
  "Five",
  "Two",
  25
);
shop.spells.push(fire, fira, blizzard, blizzara, thunder, thundara);
 module.exports = {shop, Item, Equip, Weapon, CreateSpell }