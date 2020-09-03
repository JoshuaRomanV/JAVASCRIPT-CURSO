const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords: {
        lat: 34.034,
        long: -118.70

    },
    trajes: ['Mark I', 'Mark V', 'HultBuster'],
    direccion: {
        zip:"10880, 90265",
        ubicacion: 'Malibu , California'
    },
    'ultima pelicula': 'Infinity War' // si quieres poder poner espacios o - se puede hacer asi pero no es recomendable.
    };
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords.lat); //con cada punto entramos mas adentro de cada arreglo del objeto.

console.log('Numero, Trajes', personaje.trajes.length); // con el lenght podemos obtener el numero de elementos dentro de un objeto.

console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima pelicula']); // Para poder llamar a uno que tenga espacios debe hacerse asi y no con puntos.


// Mas detalles

personaje.edad = null; // esto no funciona para borrar una propiedad.


delete personaje.edad; // esto si funciona para borrar.

console.log(personaje);


personaje.casado = true; // asi podemos añadir elementos al objetos.

// si volvemos el objeto una constante no significa que no podemos añadirle o borrarle elementos, si no que no podemos cambiar todo el objeto como por ejemplo.

// personaje =['xd', 'uwu'];

Object.freeze(personaje); // Sirve para congelar al objeto y que no vuelva a cambiar si se el borra o quita algun elemento, aunque si se puede cambiar el valor de algun objeto dentrode este objeto.

personaje.dinero = 10000000;

const entriesPares = Object.entries( personaje);
console.log(entriesPares); // sirve para barrer cada uno de los elementos y conocer su valor.

const propiedades = Object.getOwnPropertyNames(personaje); // Sirve para obtener el nombre de las propiedades y se convierten en arreglo.
console.log(propiedades); 

const valores = Object.values(personaje);// Sirve para ver el nombre de los valores del objeto.

console.log(valores);


