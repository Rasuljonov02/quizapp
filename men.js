const nevGame = document.getElementById("nev-game");
const oyin = document.querySelector(".game");
const amal = document.getElementById("amal");
const son1 = document.getElementById("son1");
const son2 = document.getElementById("son2");
const btn1 = document.querySelectorAll(".btn1");
const btn4 = document.querySelector(".btn4");
const btn0 = document.querySelector(".btn0");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const amallar = ["+", "-", "*"];

nevGame.addEventListener("click", (e) => {
	oyin.style.display = "flex";
	nevGame.style.display = "none";
	ekrangacgiqarish();
});

btn4.addEventListener("click", (e) => {
	ekrangacgiqarish();
btn0.style.border ="1px solid white";
btn0.style.border =" 1px solid white";
btn2.style.border =" 1px solid white";
btn3.style.border =" 1px solid white";


});
btn0.addEventListener("click", (e) => {
btn0.style.border =" 2px solid red";
});
btn2.addEventListener("click", (e) => {
	btn2.style.border =" 2px solid red";
	});
	btn3.addEventListener("click", (e) => {
		btn3.style.border =" 2px solid red";
		});





let asosiy = 0;
let z = 0;

function amaki() {
	tigma();

	const num1 = parseInt(son1.innerText);
	const num2 = parseInt(son2.innerText);

	if (amal.innerText === "+") {
		z = num1 + num2;
	} else if (amal.innerText === "-") {
		z = num1 - num2;
	} else if (amal.innerText === "*") {
		z = num1 * num2;
	}
	asosiy = z;

	btn1.forEach(function (btn) {
		btn.innerText = btn.dataset.value;
	});

	return z;
}

function ekrangacgiqarish() {
	amaki();
	for (let i = 0; i < 4; i++) {
		const randomValue = Math.floor(Math.random() * 21) - 10;
		const btn = btn1[i];
		const hhhhh = randomValue + z;
		btn.innerText = hhhhh;
		btn.dataset.value = hhhhh;
	}
	const lastBtn = btn1[3];
	lastBtn.innerText = z;
	lastBtn.dataset.value = z;
}

function generateRandomNumber() {
	const min = 1;
	const max = 3;
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tigma() {
	son1.innerText = ran();
	son2.innerText = ran();
	amal.innerText = amallar[ran1()];
}

function ran() {
	return Math.floor(Math.random() * 30);
}

function ran1() {
	return Math.floor(Math.random() * amallar.length);
}
