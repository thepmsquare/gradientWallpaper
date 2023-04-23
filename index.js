const box = document.querySelector("#box");
const box2 = document.querySelector("#box2");
const hexInfo = document.querySelector("#hexInfo");

const generateRandomHex = () => {
  let returnThis = "#";
  const choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    returnThis += choices[Math.floor(Math.random() * choices.length)];
  }
  return returnThis;
};

const getComplementaryHex = (hexColor) => {
  // Convert hex to RGB
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate complementary RGB values
  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;

  // Convert complementary RGB to hex
  const compHex = "#" + ((1 << 24) + (compR << 16) + (compG << 8) + compB).toString(16).slice(1);

  return compHex;
};

let color1 = generateRandomHex();
let color2 = getComplementaryHex(color1);

box.style.backgroundColor = color1;
box2.style.backgroundColor = color2;
document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
hexInfo.innerHTML = `${color1} ${color2}`;

box.addEventListener("click", () => {
  color1 = generateRandomHex();
  color2 = getComplementaryHex(color1);
  box.style.backgroundColor = color1;
  box2.style.backgroundColor = color2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  hexInfo.innerHTML = `${color1} ${color2}`;
});

box2.addEventListener("click", () => {
  color2 = generateRandomHex();
  color1 = getComplementaryHex(color2);
  box2.style.backgroundColor = color2;
  box.style.backgroundColor = color1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  hexInfo.innerHTML = `${color1} ${color2}`;
});
