const heading = document.querySelector("h1");
const button = document.querySelector("button");
const image = document.querySelector("img");
const src1 = "images/salut-novgorod_resized.png", src2 = "images/k9.png";

function set_name() {
	let name = prompt("What's your name?");
	if (!name) set_name();
	else {
		localStorage.setItem("name", name);
		heading.textContent = `Hello, ${name}`;
	}
}

image.onclick = () => {
	const src = image.getAttribute("src");
	if (src === src1) image.setAttribute("src", src2);
	else image.setAttribute("src", src1);
}
button.onclick = set_name;

if (!localStorage.getItem("name")) {
	set_name();
}
else {
	let name = localStorage.getItem("name");
	heading.textContent = `Hello, ${name}`;
}