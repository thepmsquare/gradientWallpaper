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
var color1 = generateRandomHex();
var color2 = generateRandomHex();
box.style = `background-color:${color1}`;
box2.style = `background-color:${color2}`;
document.body.style = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
hexInfo.innerHTML = `${color1} ${color2}`;
box.addEventListener("click", () => {
	color1 = generateRandomHex();
	document.body.style = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
	box.style = `background-color:${color1}`;
	hexInfo.innerHTML = `${color1} ${color2}`;
});
box2.addEventListener("click", () => {
	color2 = generateRandomHex();
	document.body.style = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
	box2.style = `background-color:${color2}`;
	hexInfo.innerHTML = `${color1} ${color2}`;
});
