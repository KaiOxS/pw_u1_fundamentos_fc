let num1 = 0;
let num2 = 2;

/* Display */

function mostrarDisplay(valor) {
	let elemento = document.getElementById('display');
	elemento.innerText = elemento.innerText + valor;
}

// Borrado

function borrarConsola(idElemento) {
	let elemento = document.getElementById(idElemento);
	elemento.innerText = elemento.innerText.slice(0, -99);
}

function borrarCaracter(idElemento) {
	let elemento = document.getElementById(idElemento);
	elemento.innerText = elemento.innerText.slice(0, -1);
}

/* Operaciones */

function evaluarOperacion(tipo) {

	let num1;
	let num2;

	let resultado = 0;

	if (tipo === '+') {
		resultado = sumar(num1, num2);
	}
	if (tipo === '-') {
		resultado = restar(num1, num2);
	}
	if (tipo === '*') {
		resultado = multiplicar(num1, num2);
	}
	if (tipo === '/') {
		resultado = dividir(num1, num2);
	}
	document.getElementById('id_resultado').innerText = resultado;

}

function sumar(num1, num2) {
	return num1 + num2;
}

function restar(num1, num2) {
	return num1 - num2;
}

function multiplicar(num1, num2) {
	return num1 * num2;
}

function dividir(num1, num2) {
	return num1 / num2;
}

function porcentaje(num1, num2) {
	return num1 * (num2 / 100);
}
