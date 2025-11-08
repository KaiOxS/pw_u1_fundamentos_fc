let num1 = 0;
let num2 = 2;

function mostrarDisplay(valor) {
	let elemento = document.getElementById('display');
	elemento.innerText = elemento.innerText + valor;
}

function evaluarOperacion(tipo) {
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

function eliminarElemento(idElemento) {
	document.getElementById(idElemento).style = 'none';
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
