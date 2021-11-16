const readline = require("readline-sync");

// Global Variables
let enemies = { lesserFiends: [], greaterFiends: [], demons: [], bosses: [] };
let inventory = { items: [], weapons: [], equipment: [], spells: [], gold: 0 };
let shop = { items: [], weapons: [], equipment: [], spells: [], gold: 1000 };

// Items
function Item(name, effect, price) {
  this.name = name;
  this.effect = effect;
  this.price = price;
}
Item.prototype.displayItems = () => {
  console.log(inventory.items);
};
let potion = new Item(
  "Healing Potion",
  `Replenish your weary soul(Adds 500 to Health).`,
  10
);
let bomb = new Item(
  "Dynamite!",
  `A good way to keep enemies at bay! (Inflicts 750 damage to enemy health).`,
  15
);
let attackUp = new Item(
  "Carinthian Tonic",
  "Gain Immense Power (Attack Power + 250)",
  25
);
let defenseUp = new Item(
  "BonTooine Tonic",
  "Rock Solid Defense (Defense + 500)",
  25
);
shop.items.push(potion, bomb, attackUp, defenseUp);

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
let fist = new Weapon("Fists", 0.25, 10, 5, false);
let teeth = new Weapon("Teeth", 0.5, 15, 10, false);
let claw = new Weapon("Claws", 0.75, 25, 20, false);
let horns = new Weapon("Horns", 2, 50, 25, false);
let shortSword = new Weapon("Short Sword", 1, 50, 25, false);
let longSword = new Weapon("Long Sword", 1.5, 55, 40, false);
let cleaver = new Weapon("Cleaver", 1.75, 50, 35, false);
let greatSword = new Weapon("Great Sword", 1.75, 75, 45, false);
let demonTide = new Weapon("Demon Tide", 2, 100, 100, false);
let fatalKiss = new Weapon("Fatal Kiss", 2, 250, 500, false);
let handOfGod = new Weapon("God's Hand", 5, 500, 1000, false);
let fistOfJudgement = new Weapon("Fist of Judgement", 3, 1000, 1000, false);
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
function Equip(name, durability, defense, price, isBroke) {
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
function CreateSpell(name, effect, damage, duration, grade, price) {
  this.name = name;
  this.effect = effect;
  this.damage = damage;
  this.duration = duration;
  this.grade = grade;
  this.price = price;
}
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

// Player
function Player(name, health, weapon, attack, defense, isAlive, inventory) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
  this.inventory = inventory;
}
Player.prototype.displayStatus = () => {
  console.log(player);
};
let player = new Player(
  readline.question(
    "\n\n\n\n\t Wake up Traveller! The hoard is upon us! Can you fight? What is your Name?:\n\n\n\n"
  ),
  1000,
  shortSword,
  Math.floor(Math.random() * 1000 + 50),
  200,
  true,
  inventory
);

// Enemy Constructors
function LesserFiend(name, health, weapon, attack, defense, isAlive) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
}
let undead = new LesserFiend("Undead", 50, teeth, 25, 25, true);
let serpentServant = new LesserFiend("Serpent Servant", 60, fist, 30, 25, true);
let berserker = new LesserFiend("Berserker", 100, greatSword, 50, 15, true);
let beastman = new LesserFiend("Beast-Man", 75, claw, 50, 25, true);
enemies.lesserFiends.push(undead, serpentServant, berserker, beastman);

function GreaterFiend(
  name,
  health,
  weapon,
  attack,
  defense,
  durability,
  isAlive
) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
  this.durability = durability;
}
let darkWraith = new GreaterFiend(
  "Dark Wraith",
  100,
  demonTide,
  100,
  15,
  15,
  true
);
let minotaur = new GreaterFiend("Minotaur", 150, horns, 150, 75, 50, true);
let lich = new GreaterFiend("Ghoul", 100, "Magic", 150, 20, 10, true);
enemies.greaterFiends.push(darkWraith, minotaur, lich);

function Demon(
  name,
  health,
  weapon,
  attack,
  defense,
  durability,
  effect,
  spells,
  isAlive
) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
  this.durability = durability;
  this.effect = effect;
  this.spells = spells;
}
let behemoth = new Demon(
  "The Great Beast, Behemoth",
  2000,
  demonTide,
  250,
  250,
  250,
  "Rampage: Tramples over everything in its path! (500)",
  [fira, blizzara, thundara],
  true
);
let serpentKing = new Demon(
  "Serpent King",
  1500,
  fatalKiss,
  200,
  200,
  200,
  "Constrictor: Inflicts poison to enemies! (50*10)",
  [fira, blizzara, thundara],

  true
);
let shadow = new Demon(
  `"Shadow" ${player.name}`,
  player.health,
  player.weapon,
  player.attack,
  player.defense,
  300,
  "Duality: Inflict 25% of damage received",
  player.inventory.spells,
  true
);
enemies.demons.push(behemoth, serpentKing, shadow);

function Boss(
  name,
  health,
  weapon,
  attack,
  defense,
  durability,
  effect,
  spells,
  isAlive,
  revive
) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
  this.durability = durability;
  this.effect = effect;
  this.spells = spells;
  this.revive = revive;
}
let king = new Boss(
  "The King of Blood",
  5000,
  fistOfJudgement,
  500,
  500,
  500,
  "GiantsBane: Enters a berserk like state and charges with his mighty hammer",
  shop.spells,
  true,
  false
);
enemies.bosses.push(king);

//While Player is Alive
mainGameFunction = () => {
  while (player.isAlive === true) {}
  if (player.health === 0) {
    player.isAlive = false;
  }
};

console.log(enemies);
