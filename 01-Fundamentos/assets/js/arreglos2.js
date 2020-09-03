let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[2-2]; // Puedes obtener un elemento tambien matematicamente.
let ultimo = juegos[juegos.length -1] ; //Si tienes un arreglo dinamico puedes hacer esto para siempre tener el valor del ultimo elemento.

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
}); // esto sirve para ver el nombre del elemento, su ubicacion, y arreglo.

let nuevaLongitud =juegos.push('F-Zero'); // EL push sirve para añadir un elemento al arreglo, este se añadira y sumara un numero al arreglo anterior dependiendo de los elementos añadidos, al final del arreglo.

console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Undertale'); // El unshift sirve para añadir un elemento al arreglo pero al principio del arreglo.

console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos}); // El pop sirve para borrar el ultimo elemento de un arreglo.

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos}); //splice sirve para borrar elementos seleccionados por nosotros.

let metroidIndex = juegos.indexOf('Metroid'); // Casesensitive esto te sirve para saber el indice de un elemento dentro de un arreglo. Si colocas el nombre del elemento mal te saldra un -1 osea que no lo encontro .
console.log(metroidIndex);


