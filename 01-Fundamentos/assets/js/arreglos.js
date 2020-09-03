// Son un objeto muy parecido a una lista de información, que contienen un grupo de elementos.
//Usualmente esa informacion dentro del arreglo es del mismo tipo de dato.

// los arreglos son marcados por estas llaves [] y empiezan desde el 0 ejemplo: 0   1  2.

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log([videoJuegos]); // llamar a todos los elementos de arreglo.
console.log(videoJuegos[1]); // llamar a un elemento del arreglo.

let arregloCosas =[
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr.Light', ['Dr Willy', 'Woodman']]
];
console.log([arregloCosas]);
console.log(arregloCosas[0]);
console.log(arregloCosas[7][4][1]); // si tienes un arreglo y adentro de ese arreglo toro alegro puedes colocar el numero del arreglo despues del arreglo donde estas y asi puedes o sacar otro arreglo o algun elemento de un arreglo
const arr1 = []; // Esto es un arreglo vacio con slots que puedes rellenar sin limite.
const arr = new Array(10); // Este arreglo tiene un limite de 10.
console.log(arr);