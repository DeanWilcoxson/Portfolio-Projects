const readlineSync = require("readline-sync");
let celebrity = readlineSync.question("Celebrity Name:");
let town = readlineSync.question("Town:");
let verb_one = readlineSync.question("Action:");
let verb_two = readlineSync.question("Activity:");
let adjective = readlineSync.question("Adjective:");
console.log(
  `Hello, My name is ${celebrity}! I live in ${town}. I have a ${adjective} cat, he likes to ${verb_one} all over me. We go ${verb_two}ing often and I can tell he loves it.`
);
