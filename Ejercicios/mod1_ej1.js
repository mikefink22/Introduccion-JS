// Utiliza la consola de JavaScript para calcular:

// a) Los años bisiestos que habrá antes de 2050


// Un año bisiesto es si el año es divisible por 4; salvo que sea divisible por 100 y no por 400.

// Sin contar 2024 que fue bisiesto hacemos:

// Prox año bisiesto:

var proxBisiesto = 2024+4;

2050%4;

// Como el módulo de 2050 es 2, no es bisiesto, y el último año bisiesto es:

var ultimoBisiesto = 2050 - 2050%4;

var totalBisiestos = (ultimoBisiesto-proxBisiesto)/4;

console.log("Hay ",totalBisiestos," años bisiestos antes de 2050");


// b) Cuántas cartas con número par y negras hay en una baraja de poker
// Una baraja de poker tiene 4 palos, 2 rojos y 2 negros.
// Los números de las cartas van del 2 al 10, por lo tanto:

var totalPares = 2*((10-2)/2+1);
//(10-2)/2 = 4 son 4 saltos del 2 al 10 y le sumamos 1 par que es el primer número.

console.log("El total de cartas con número par y de color negro es: ", totalPares);

//otra forma
const palosNegros = 2;
const numerosPares = 5;
console.log("Total Pares: ", palosNegros*numerosPares);