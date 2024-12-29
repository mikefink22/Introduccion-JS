// Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones, compruebe si es de corazones y además es el número 4. En caso afirmativo, lo imprimimos en la consola. Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?

var carta1 = "Kc";

if (carta1[0]==="4") {
    console.log("Es un ",carta1[0]);
} else {
    console.log("No es un cuatro, es un",carta1[0]);
}

if (carta1[1]==="c"){
    console.log("Es de corazones");
} else {
    console.log("No es de corazones");
}



