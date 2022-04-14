import FridgeBuddyPreview from "../../images/FridgeBuddyPreview.JPG";
import MadlibJSPreview from "../../images/MadlibJSPreview.JPG";
import MadlibPYPreview from "../../images/MadlibPYPreview.JPG";
import WalmartJSPreview from "../../images/WalmartJSPreview.JPG";
import MediaPlayerPYPreview from "../../images/MediaPlayerPYPreview.JPG";
import Fsw130Capstone from "../../images/Fsw130Capstone.JPG";
import TheBountyHunter from "../../images/TheBountyHunter.JPG";
import VotingApp from "../../images/VotingApp.JPG";
import RoleplayingGame from "../../images/RoleplayingGame.JPG";
import { v4 as uuidv4 } from "uuid";
export const projOne = {
  id: uuidv4(),
  name: "Fridge Buddy",
  image: `${FridgeBuddyPreview}`,
  languages: [
    "React.JS",
    "Express.JS",
    "MongoDB",
    "Axios",
    "Bcrypt",
    "Mongoose",
  ],
  concepts: ["API Database", "Styled Components", "Authentication"],
  link: "https://github.com/DeanWilcoxson/AFS-220/tree/main/FridgeBuddy",
};
export const projTwo = {
  id: uuidv4(),
  name: "Madlib.JS",
  image: `${MadlibJSPreview}`,
  languages: ["Node.js", "Javascript"],
  concepts: ["Template Literals", "Readline-Sync"],
  link:
    "https://github.com/DeanWilcoxson/Portfolio-Projects/blob/main/madlib_generators/madlib.js",
};
export const projThree = {
  id: uuidv4(),
  name: "Madlib.PY",
  image: `${MadlibPYPreview}`,
  languages: ["Python"],
  concepts: ["F strings"],
  link:
    "https://github.com/DeanWilcoxson/Portfolio-Projects/blob/main/madlib_generators/madlib.py",
};
export const projFour = {
  id: uuidv4(),
  name: "Walmart.JS",
  image: `${WalmartJSPreview}`,
  languages: ["Node.js", "Mocha", "Chai", "Javascript"],
  concepts: ["Test Driven Development"],
  link: "https://github.com/DeanWilcoxson/AFS-215/tree/main/week7/walmart",
};
export const projFive = {
  id: uuidv4(),
  name: "MediaPlayer.PY",
  image: `${MediaPlayerPYPreview}`,
  languages: ["Python"],
  concepts: ["Data Structures"],
  link:
    "https://github.com/DeanWilcoxson/AFS-210/blob/main/week7/Capstone_Media_Player.py",
};
export const projSix = {
  id: uuidv4(),
  name: "Character List",
  image: `${Fsw130Capstone}`,
  languages: ["React.JS", "Redux.JS"],
  concepts: ["State Management", "API Database", "Single-Page Application"],
  link:
    "https://github.com/DeanWilcoxson/Fsw-130/tree/main/week7/Capstone/capstone",
};
export const projSeven = {
  id: uuidv4(),
  name: "The Bounty Hunter",
  image: `${TheBountyHunter}`,
  languages: ["React.JS", "Axios", "Express.JS"],
  concepts: ["JSON", "Middleware", "State Hooks"],
  link: "https://github.com/DeanWilcoxson/Fsw-125/tree/main/week7/Capstone",
};
export const projEight = {
  id: uuidv4(),
  name: "Voting App",
  image: `${VotingApp}`,
  languages: ["React.JS", "Axios", "Express.JS", "Bcrypt", "Mongoose"],
  concepts: ["Middleware", "State Managment", "Authentication"],
  link: "https://github.com/DeanWilcoxson/Fsw-135/tree/main/week7/Capstone",
};
export const projNine = {
  id: uuidv4(),
  name: "RPG.JS",
  image: `${RoleplayingGame}`,
  languages: ["Node.JS", "Javascript"],
  concepts: ["Object Oriented Programming", "Constructors", "Readline-Sync"],
  link:
    "https://github.com/DeanWilcoxson/Fsw-105/blob/main/week7/CapstoneRPG.js",
};
