import FridgeBuddyPreview from "../../images/FridgeBuddyPreview.JPG";
import MadlibJSPreview from "../../images/MadlibJSPreview.JPG";
import { v4 as uuidv4 } from "uuid";
export const projOne = {
  id: uuidv4(),
  name: "Fridge Buddy",
  image: `${FridgeBuddyPreview}`,
  languages: ["HTML5", "React.JS", "Express.JS", "MongoDB", "Axios", "Bcrypt"],
  concepts: ["API Database", "Styled Components", "Encapsulation"],
  link: "https://github.com/DeanWilcoxson/AFS-220/tree/main/FridgeBuddy",
};
export const projTwo = {
  id: uuidv4(),
  name: "Madlib.JS",
  image: `${MadlibJSPreview}`,
  languages: ["Node.js", "Javascript"],
  concepts: ["Template Literals"],
  link:
    "https://github.com/DeanWilcoxson/Portfolio-Projects/blob/main/madlib_generators/madlib.js",
};
export const projThree = {
  id: uuidv4(),
  name: "Madlib.PY",
  image: `${}`,
  languages: ["Python",],
  concepts: [""],
  link:
    "https://github.com/DeanWilcoxson/Portfolio-Projects/blob/main/madlib_generators/madlib.js",
};
export const projFour = {
  id: uuidv4(),
  name: "Fridge Buddy",
  image: `${FridgeBuddyPreview}`,
  languages: [""],
  concepts: [""],
  link: "",
};
