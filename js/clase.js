console.log("HOLA BIENVENIDO JS");

// VARIABLES

const nameuser = "juan david";
var x = "valor";
let y = "valor";

let a = 20;
let b = 5.4;
let string = "mi nombre es david";
let number = "0234444";
let boolean_uno = false;
let boolean_two = true;
let array = [1,2,3,4,5];
let array_string = ["lunes","martes","miercoles","jueves","viernes"];

// operadores aritmeticos: + - / * %

let suma = 1+5+a;
let resta = 1-5-a;
let multi = 1 * 5 * a;
let divi = 1 / 5 / a;
let module = 10%2;
let elev = 5^2;
console.log("- " + suma + "\n- " + resta + "\n- " + multi + "\n- " + divi + "\n- " + module + "\n- " + "- " + elev)

// operadores de comparacion: = / == / === / <> / >= / <= / > / <

// operadores logicos: AND && / OR || / 

if(10>5){
    for(let i=0;i<array_string.length;i++){
        console.log(array_string[i])

    }
}

let j = 5;
let k = 10;
while(k>=j){
    console.log("entra");
    j++;
    break;
}