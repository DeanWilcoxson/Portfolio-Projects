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
let vest = new Equip("Leather Vest", 60, 25, 15, false);
let lightArmor = new Equip("Chain Mail", 75, 50, 25, false);
let heavyArmor = new Equip("Plate Mail", 85, 75, 50, false);
shop.equipment.push(vest, lightArmor, heavyArmor);
