// Items
function Item(name, effect, price) {
  this.name = name;
  this.effect = effect;
  this.price = price;
}
Item.prototype.displayItems = () => {
  console.log(inventory.items);
};
let potion = new Item("Healing Potion",`Replenish your weary soul(Adds 500 to Health).`,20);
let bomb = new Item("Dynamite!",`A good way to keep enemies at bay! (Inflicts 750 damage to enemy health).`,25);
let attackUp = new Item("Carinthian Tonic","Gain Immense Power (Attack Power + 250)",50);
let defenseUp = new Item("BonTooine Tonic","Rock Solid Defense (Defense + 500)",50);
shop.items.push(potion, bomb, attackUp, defenseUp);