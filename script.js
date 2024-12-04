// Ejercicios de dos punteros

// Mesa de Invitados
// Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

const invitadosA = ["Alex", "Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const invitadosB = ["Ana", "Brenda", "Cecilia", "Daniel", "Eduardo"];
const invitadosC = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const invitadosD = ["Ana", "Carlos", "Daniel", "Diana", "Eduardo"];
const invitadosE = ["Ana", "Cecilia", "Diana", "Eduardo"];

const encontrarParejaTwoSum = (array) => {
    // En este caso no se utilizan en extremos, sino pegados, porque la lista ya está en orden alfabético.
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < array.length) {
        // charAt() revisa el caracter. Entre paréntesis la posición. 0 sería el primero. Para el último usar un .length -1
        if (array[inicio].charAt(0) === array[siguiente].charAt(0)) {
            return [array[inicio], array[siguiente]];
        }
        // En este caso no es necesario un else.
        inicio++;
        siguiente++;
    }

    return null;
}

console.log(encontrarParejaTwoSum(invitadosA));
console.log(encontrarParejaTwoSum(invitadosB));
console.log(encontrarParejaTwoSum(invitadosC));
console.log(encontrarParejaTwoSum(invitadosD));
console.log(encontrarParejaTwoSum(invitadosE));

// Two Sum || Suma de dos
// dado un target y un arreglo ordenado de mayor a menor, encuentra un par de numeros que sumados den el target y retorna el indice de esos numeros.
const numerosTwoSum = [2, 4, 6, 8, 10];
const objetivoTwoSum = 14;

const dosPunterosTwoSum = (array, objetivo) => {
    let inicio = 0; // Primer puntero
    let fin = array.length - 1; // Segundo puntero

    while (inicio < fin) {
        const suma = array[inicio] + array[fin];

        if (suma === objetivo) {
            return [array[inicio], array[fin]]; // Regresamos los números del array que cumplen la condición
            // return [inicio, fin]; // Regresamos los índices del array que tienen los números que cumplen la condición
        }
        if (suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        }
        else {
            fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }

    return null; // No se encontró ninguna pareja
}

const resultadoTwoSum = dosPunterosTwoSum(numerosTwoSum, objetivoTwoSum)
console.log(resultadoTwoSum); // [2, 4]

// Cuadrados de un arreglo
// Dado un arreglo de números enteros acomodados de menor a mayor, retorna un arreglo the los cuadrados de cada numero acomodados de menor a mayor.
const numerosCuadrados = [-4, -1, 0, 3, 10];

const dosPunterosCuadradosTwoSum = (array) => {
    let inicio = 0;
    let fin = array.length - 1;
    let resultado = new Array(array.length);
    // Se crea variable índice, que va bajando de nivel para poner en orden los números
    let indice = array.length - 1;

    while (inicio <= fin) {
        const inicioCuadrado = array[inicio] ** 2;
        const finCuadrado = array[fin] ** 2;
        if (inicioCuadrado > finCuadrado) {
            resultado[indice] = inicioCuadrado;
            inicio++;
        } else {
            resultado[indice] = finCuadrado;
            fin--;
        }
        indice--;
    }
    return resultado;
}

const resultadoCuadrados = dosPunterosCuadradosTwoSum(numerosCuadrados);
console.log(resultadoCuadrados);

// Palíndromo
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const esPalindromoTwoSum = (palabra) => {
    // toLowerCase() las pasa a minúsculas
    // split('') separa cada caracter con el argumento ''
    // .filter crea un nuevo array descartando caracteres especiales, utilizando una expresión regular y test()
    const arrayAct = palabra.toLowerCase().split('').filter((letra) => !/[\s,;.\-:?']+/.test(letra));
    let inicio = 0;
    let fin = arrayAct.length - 1;
    console.log(arrayAct.join('')); // solo es para prueba visual
    console.log([...arrayAct].reverse().join('')); // solo es para prueba visual

    while (inicio < fin) {
        if (arrayAct[inicio] !== arrayAct[fin]) {
            return false; // Si no coinciden, no es un palíndromo
        }
        inicio++;
        fin--;
    }
    return true; // Es un palíndromo
}

console.log(esPalindromoTwoSum("A man, a plan, a canal: Panama"));
console.log(esPalindromoTwoSum("Eva, can I see bees in a cave?"));
console.log(esPalindromoTwoSum("Madam, in Eden, I'm Adam."));
console.log(esPalindromoTwoSum("Was it a car or a cat I saw?"));
console.log(esPalindromoTwoSum("Race a Car"));
console.log(esPalindromoTwoSum(" "));

// String al revés
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

const string1 = ["h","e","l","l","o"];
const string2 = ["H","a","n","n","a","h"];
const string3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const string4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const string5 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const string6 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];


// Solución Big O notation: O(n)
const stringRevesTwoSumOn = (array) => {
    let inicio = 0;
    let fin = array.length - 1;
    // Se crea nueva variable para crear un resultado, lo que da Big O notation: O(n)
    let resultado = new Array(array.length);
    
    while (inicio <= fin) {
        const letraInicio = array[inicio];
        const letraFin = array[fin];
        // Se creó nueva variable para crear un resultado, lo que da Big O notation: O(n)
        resultado[inicio] = letraFin;
        resultado[fin] =  letraInicio;
        inicio++;
        fin--;
    }
    return resultado;
}

console.log(stringRevesTwoSumOn(string1));
console.log(stringRevesTwoSumOn(string2));
console.log(stringRevesTwoSumOn(string3));
console.log(stringRevesTwoSumOn(string4));
console.log(stringRevesTwoSumOn(string5));
console.log(stringRevesTwoSumOn(string6));

// Solución Big O notation: O(1)
const stringRevesTwoSumO1 = (array) => {
    let inicio = 0;
    let fin = array.length - 1;
        
    while (inicio <= fin) {
        const letraInicio = array[inicio];
        const letraFin = array[fin];
        // Se modifica el mismo array, lo que da Big O notation: O(1)
        array[inicio] = letraFin;
        array[fin] =  letraInicio;
        inicio++;
        fin--;
    }
    return array;
}

console.log(stringRevesTwoSumO1(string1));
console.log(stringRevesTwoSumO1(string2));
console.log(stringRevesTwoSumO1(string3));
console.log(stringRevesTwoSumO1(string4));
console.log(stringRevesTwoSumO1(string5));
console.log(stringRevesTwoSumO1(string6));