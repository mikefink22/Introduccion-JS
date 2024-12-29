
// Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola.

var anioActual = 2024;
var anioFinal = 2050;

console.log("Lista de años bisiestos entre ",anioActual," y", anioFinal,":");
for (var i=anioActual;  i<=anioFinal; i=i+4){
    console.log(i);
}

// Opción 2:

for (var i=2024; i<=2050;i=i+1){
    if(i%4===0){
        console.log("El año ",i, " es bisiesto");
    }
}