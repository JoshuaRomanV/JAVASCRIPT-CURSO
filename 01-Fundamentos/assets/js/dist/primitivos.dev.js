"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var nombre = "Peter Parker";
console.log(nombre);
nombre = "Ben Parker";
console.log(nombre);
nombre = 'Tia May';
nombre = "Tia May";
console.log(_typeof(nombre)); // Sirve para ver el tipo de dato de la variable.

nombre = 123;
console.log(_typeof(nombre));
var esMarvel = true;
console.log(_typeof(esMarvel));
var edad = 33.00001;
console.log(_typeof(edad));
var superPoder;
console.log(_typeof(superPoder));
var soyNull = null;
console.log(_typeof(soyNull));
var symbol1 = Symbol("a");
var symbol2 = Symbol("a");
console.log(symbol1 === symbol2);