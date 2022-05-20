let enemies = { lesserFiends: [], greaterFiends: [], demons: [], bosses: [] };
function LesserFiend(name, health, weapon, attack, defense, isAlive) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = attack;
  this.defense = defense;
  this.isAlive = isAlive;
}
LesserFiend.prototype.displayBounties = () => {
  console.log(enemies.lesserFiends);
};

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
GreaterFiend.prototype.displayBounties = () => {
  console.log(enemies.greaterFiends);
};

function Demon(
  name,
  health,
  weapon,
  attack,
  defense,
  durability,
  effect,
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
}
Demon.prototype.displayBounties = () => {
  console.log(enemies.demons);
};

function Boss(
  name,
  health,
  weapon,
  attack,
  defense,
  durability,
  effect,
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
  this.revive = revive;
}
Boss.prototype.displayBounties = () => {
  console.log(enemies.bosses);
};
let undead = new LesserFiend("Undead", 50, teeth, 25, 25, true);
let serpentServant = new LesserFiend("Serpent Servant", 60, fist, 30, 25, true);
let berserker = new LesserFiend("Berserker", 100, greatSword, 50, 15, true);
let beastman = new LesserFiend("Beast-Man", 75, claw, 50, 25, true);
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
enemies.lesserFiends.push(undead, serpentServant, berserker, beastman);
enemies.greaterFiends.push(darkWraith, minotaur, lich);
enemies.demons.push(behemoth, serpentKing, shadow);
enemies.bosses.push(king);
module.exports = {enemies, LesserFiend, GreaterFiend, Demon, Boss};
