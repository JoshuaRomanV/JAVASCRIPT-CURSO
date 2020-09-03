"use strict";

alert('Hola mundo'); // recuadro flotante que pausa la pagina.

var nombre = prompt('¿Cual es tu nombre?', 'Sin Nombre'); // recuadro flotante que tiene un input el segundo string despues de la coma es el texto que estara dentro de input que el usuario vera .

console.log(nombre);
console.log('***' + nombre + '***'); // si no colocamos nada dentro de nombre es un string vacio, la variable aparece enmedio y si cancelamos aparece null.

var selecciom = confirm('Estas seguro de borrar esto??'); //el comfirm te sirve para sacar valores boleanos para hacer que el usuario decida sobre algo.

console.log(selecciom); //Las alertas se ejecutan en Window por lo que si queremos corres este js en la consola de VS code nos saldra que no se puede por que alert no esta definida(confirm).
// console.log(global); El global se puede ejecutar en la consola de VS code, pero no en el navegador, este te da datos muy parecidos a los que te da window en el navegador.