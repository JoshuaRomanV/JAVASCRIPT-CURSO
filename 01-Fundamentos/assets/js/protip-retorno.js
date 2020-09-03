function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido, // Esto Se puede reducir.

        nombre,
        apellido, // No es necesario definirle un valor a cada elemento si ya los llamamos al crear la funcion.

        nombre, apellido // Esta es la forma mas reducida en la que podemos acomodarlo.
    }
}


const crearPersona2 = (nombre, apellido) => ({nombre , apellido}); // Los patentesis primero indican que queremos hacerle el return a todo lo que este dentro de ellos.

const persona = crearPersona2('Linda ', 'Francisco');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

//const imprimeArgumentos2 = ()=> {
 //   console.log(arguments); // La funcion de flecha no crea argumentos.
//}
const imprimeArgumentos2 = (args)=> {
       console.log(args); // Si hacemos esto solo obtendremos el valor del primer argumento de la funcion.
   }

const imprimeArgumentos3 = (...args) => {// Esto es un parametro rest el cual hace que todos los argumentos se junten en un arreglo, con el parametro rest no puede ir ningun otro argumento y si queremos extraer una variable antes del rest esa variable tendra su propio argumento independiente
    console.log(args);
}
const imprimeArgumentos4 = (edad, ...args) => {
    console.log(edad, args);
    return args;
}

const argumentos = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log(argumentos); // esto no

const [casado, vivo, nombre, saludo] = imprimeArgumentos4(10, true, false, 'Fernando', 'Hola'); // Si lo que te interesa es que todo este en un arreglo usaras []
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Linda ', 'Francisco'); // Si solo te interesa un dato en especifico usaras {}
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: ['Mark I', 'Mark V', 'HultBuster'],
    };


/*const imprimePropiedades = (personaje) => {
    console.log('Nombre: ', personaje.nombre);
    console.log('codeName: ',personaje.codeName);
    console.log('Vivo: ',personaje.vivo);
    console.log('Edad: ',personaje.edad);
    console.log('trajes: ',personaje.trajes);
}*/ // Esto no, se ve muy lleno de codigo y se ve feo

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => { // Si le ponemos un valor por defecto directo, es mas facil y el codigo queda mas limpio y legible, aun asi cuando esto se encuentre una valor antes se cambiara el que esta por defecto por ese.
    
  //  edad= edad || 0; Si un elemento nos aparece como indefinido, podemos aplicar esto y darle un valor por defecto, pero si necesitamos hacer muchas validaciones es muy tardado por lo que es mejor evitarlo
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);