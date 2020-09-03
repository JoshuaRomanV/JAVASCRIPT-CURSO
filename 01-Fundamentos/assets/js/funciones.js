function saludar(nombre){ //Dentro del parentesis podemos colocar una variable y con esta varible cuando nosotros la definiimos en saludar(); tomara ese lugar el valor dentro del parentesis.
    console.log(arguments); //aun sin definir arguments, todas las funciones lo tienen y son todos los elementos que colocaste en la funcion
    console.log('Hola ' + nombre); //Esta no es una buena practica ya que por seguridad las funciones deben estar dentro de una constante.
    return [1, 2];
    console.log('Soy un codigo que esta despues del return por lo tanto nunca me ejecutare');
}

//  var saludar = 123; En las funciones no debemos cambiar a var, por que nos dara un error de que saludar no es una funcion.

// let saludar = 123;  En cambio si lo hacemos con let simplememente nos dira que saludar ya esta declarado.

const saludar2 = function( nombre){ 
    console.log('JoJo ' + nombre); // Esta si es una buena practica
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = nombre => { // cuando se mande un argumento con la flecha se pueden quitar los parentesis de argumento.
    console.log('Hola ' + nombre);
}

saludar('Fernando', 40, true, 'Costa Rica'); 
const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica'); 
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

saludar2('Joseph');
saludarFlecha();
saludarFlecha2('Linda');



function sumar (a, b ){
    return a + b ;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar3 = (a,b) => a + b; // Si el return se encuentra en la misma linea y solo utilizaremos una linea de codigo podemos hacer esto.

console.log(sumar(1, 2));


function getAleatorio() {
  return Math.random();
}
const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());