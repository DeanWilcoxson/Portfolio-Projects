const readline = require("readline-sync");
console.log(`\t\t\t\tStart Game\n`);
const enemies = require("./src/enemies");
console.log(enemies);
// Global Variables

let inventory = { items: [], weapons: [], equipment: [], spells: [], gold: 0 };

// Items


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
    "\n\tGodfrey:'Wake up Traveller! The hoard is upon us! Can you fight? What is your Name?' \n\n\t\t Please Enter your name: "
  ),
  1000,
  shortSword,
  Math.floor(Math.random() * 100 + 50),
  200,
  true,
  inventory
);
player.inventory.weapons.push(player.weapon);

// Enemy Constructors

console.log(
  `\n\tGodfrey: 'Take this ${player.weapon.name} ${player.name}, defend yourself! And Run!!!'
  \n\t\t You grab the ${player.weapon.name} and take off running, leaving all your things behind.
  \t\t You have a family to return to. You can't die here. You hear someone chasing you, 
  \t\t you turn around and thrust the ${player.weapon.name} into his gut. It was self defense. 
  \t\t You didn't want to do it, but the hoard doesn't set people free or leave them alive. 
  \t\t Its time to get going, try to get away from the hoard while they are busy with the caravan.`
);
mainGameFunction();
//While Player is Alive
function mainGameFunction() {
  while (player.isAlive === true) {
    const options = readline.keyIn(
      `\n\t\t\t\t  Menu: \n\t[1]Run \t\t[2]Status \t[3]Items \t[4]Exit \t[5]Enemies\n\n\t\t`,
      { limit: `$<1-5>` }
    );
    if (options == 1) {
      run();
    } else if (options == 2) {
      player.displayStatus();
    } else if (options == 3) {
      for (let i = 0; i < player.inventory.items.length; i++) {
        player.inventory.items[i].displayItems();
      }
      let useItem = readline.keyIn(
        `\nWould you like to use an item? \n[1]Yes [2]Not Yet\n\n`,
        {
          limit: `$<1-2>`,
        }
      );
      for (let item = 0; item < player.inventory.items.length; item++) {
        if (player.inventory.items[item] === potion || items[item] === bomb) {
          if (useItem == 1) {
            let itemUse = readline.keyIn(
              `\n[1] Potion \t[2] Bomb  \t[3] Menu\n\n`,
              {
                limit: `$<1-3>`,
              }
            );
            if (itemUse == 1) {
            } else if (itemUse == 2) {
            } else if (itemUse == 3) {
              goBerserk();
            }
          } else if (useItem == 2) {
            goBerserk();
          }
        } else if (items[item] !== potion || items[item] !== armor) {
          console.log(`No items in the Inventory.`);
        }
      }
    } else if (options == 4) {
      console.log(
        `\n\tGodfrey: 'You are a pitiful Weakling! You've seen the terror that is the Darkness, and have fled? You have left the rest of humanity vulnerable.'`
      );
      player.isAlive = false;
    } else if (options == 5) {
      console.log(enemies.lesserFiends);
    }
  }
  if (player.health === 0) {
    player.isAlive = false;
  }
}

function run() {
  console.log(
    "You Run until the screaming fades. You stumble into a farmers barn, you fall onto a pile of hay and pass out from exhaustion."
  );
  readline.keyIn(`\n\t\t\t\t  Menu: \n\t[1]Wake up \t[2]Sleep More \n\n\t\t`, {
    limit: `$<1-2>`,
  });
}
// console.log(player.weapon.name);
