let num1 = 0;
let num2 = 2;

/* Display */

function mostrarDisplay(valor) {
	let elemento = document.getElementById('display');

	if (elemento.textContent === '0') {
		elemento.textContent = valor;
	} else {
		elemento.textContent += valor;
	}

}

// Borrado

function borrarConsola(idElemento) {
	let elemento = document.getElementById(idElemento);
	elemento.innerText = elemento.innerText.slice(0, -99);
	elemento.textContent = '0';
}

function borrarCaracter(idElemento) {
	let elemento = document.getElementById(idElemento);
	elemento.innerText = elemento.innerText.slice(0, -1);
	if (elemento.textContent.length === 0) {
		elemento.textContent = '0';
	}
}

/* Operaciones */

function evaluarOperacion() {
	let display = document.getElementById('display');
	var elementos = Array.from(document.getElementsByTagName('button'));

	for (elemento of elementos) {

		if (elemento.textContent === '=') {
			display.textContent = eval(display.textContent);
		}
	}
}