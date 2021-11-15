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