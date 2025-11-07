function cambiarColor(id_elemento, color) {
	document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(idElementoPadre, html) {
	document.getElementById(idElementoPadre).innerHTML = html;
}

function construirH1() {
	return '<h1 id="Id_calculadora"> Calculadora</h1>';
}

function eliminarElemento(idElemento) {
	document.getElementById(idElemento).remove();
}

function ocultarElemento(idElemento) {
	document.getElementById(idElemento).style.display = 'none';
}

function mostrarElemento(idElemento) {
	document.getElementById(idElemento).style.display = 'block';
}

function evaluarOperacion(tipo) {

	let num1 = parseFloat(document.getElementById('id_n1').value);
	let num2 = parseFloat(document.getElementById('id_n2').value);

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

function fundamentosJS() {
	/* 3 Tipos de variables */

	// var
	var nombre1 = "Anthony";
	// Antigua, es cosiderada obsoleta

	// let
	let apellido = "Cajamarca"; // variables cambiantes
	let apellido2 = 15;
	apellido2 = "Terán";
	let arreglo = [
		1,
		2,
		3,
		4,
		5,
		6
	];
	let diasSemana = ["Lunes", "Martes", 'Miércoles', '......'];

	// const --> Variable final
	const IVA = 12.8;
	console.log("Fundamentos de JS");
	console.log(nombre1);
	console.log(IVA);
	console.log(arreglo);

	// Arreglos --> Lo más común es declararlos como constante (const)
	const arreglosDiasSemana = ['Lunes', 'Martes', 'Miércoles']
	arreglosDiasSemana.push('Jueves');
	console.log(arreglosDiasSemana);
	arreglosDiasSemana.unshift('Días');
	console.log(arreglosDiasSemana);
	console.log(arreglosDiasSemana[0]);
	console.log('Manejo de nulos, undefined y vacío');
	arreglosDiasSemana.push(null);
	arreglosDiasSemana.push('');
	console.log(arreglosDiasSemana[5]);
	console.log(arreglosDiasSemana[6]);
	console.log(arreglosDiasSemana[7]);

	const numerosPares = [2, 4, 6, 8];
	const numerosImpares = [
		1,
		3,
		5,
		7,
		9
	];
	const numerosTotales = numerosImpares.concat(numerosPares);
	console.log(numerosTotales);

	/* Sentencias de Control */
	let edad = 19;
	if (edad >= 18) {
		console.log('Es mayor de edad');
	} else {
		console.log('Es menor de edad');
	}

	let dia = 'Lunes';
	switch (dia) {
		case 'lunes':
			console.log('Es Lunes');
			break;
		case 'martes':
			console.log('Es Martes');
			break;
		default:
			console.log('No es ninguno de esos días');
	}

	for (let i = 0; i <= 5; i++) {
		console.log(i);
	}

	const frutas = ['Manzana', 'Sandía', 'Papaya', 'Naranja'];
	for (let fruta of frutas) { // Si se va a iterar con un arreglo se usa of
		console.log(fruta);
	}

	/* Manejo de Objetos */
	const profesor = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito'
	}

	console.log(profesor);
	console.log(profesor.nombre);
	profesor.apellido = 'KaiOxS';
	console.log(profesor);

	// Comparadores

	if (profesor.ciudad === 'Quito') {
		console.log('Es Quiteño');
	}

	if (profesor.edad !== 25) {
		console.log('Es diferente de 25');
	} else {
		console.log('Es 25');
	}

	for (let clave in profesor) { // Si se otera en un objeto se usa in
		console.log(clave);
		console.log(profesor[clave]);
	}

	const e1 = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito'
	}

	const e2 = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito'
	}

	const arregloEstudiantes = [
		e1, e2, {
			nombre: 'Anthony 3',
			apellido: 'Cajamarca',
			edad: 25,
			ecuatoriano: true,
			genero: 'M',
			ciudad: 'Quito'
		}
	];

	console.log(arregloEstudiantes[0]);
	console.log(arregloEstudiantes[2]);

	/* Desestructuración */
	// Es una forma sencilla y práctica de extraer valores de un objeto o un arreglo y asignarlos a variables individuales

	// Arreglos
	const ar1 = [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	];

	const [p1, p2, p3, p4, p5] = ar1;
	console.log(p1);
	console.log(p5);

	const [primero,,,,,, ultimo] = ar1; // Se dejan los espacios necesarios
	console.log(primero);
	console.log(ultimo);

	const [pos1, pos2] = [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	]; // Se puede desestructurar en la misma línea

	imprime(ar1);

	// Objetos

	const e3 = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito'
	}

	const {nombre, ciudad} = e3;

	console.log(nombre);
	console.log(ciudad);

	const {nombre: n, ciudad: ciu} = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito'
	}

	console.log(n);
	console.log(ciu);

	const e4 = {
		nombre: 'Anthony',
		apellido: 'Cajamarca',
		edad: 25,
		ecuatoriano: true,
		genero: 'M',
		ciudad: 'Quito',
		direccion: {
			calle: 'Avenida América',
			barrio: 'La Gasca',
			numeracion: '2343'
		}
	}

	console.log(e4.direccion);
	console.log(e4.direccion.barrio);

	const {edad: ed, direccion} = e4;
	console.log(ed);
	console.log(direccion);

	const {calle} = direccion;
	console.log(calle);

	const {
		direccion: {
			barrio,
			calle: c1,
			numeracion
		}
	} = e4;

	console.log(barrio);
	console.log(c1);
	console.log(numeracion);
}

// Mientras sea un arreglo se puede desestructurar con alguna de las técnicas

function imprime([a, b, c]) { // Se puede desestructurar en la firma del método
	console.log(a);
	console.log(b);
	console.log(c);
}
