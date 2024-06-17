/* JAVASCRIPT ES UN LENGUAJE ORIENTADO A EVENTOS */
// EVENTOS: click, scroll, focus , onmouseover, 

console.log("Hola!!") // es el print() de python
// System.out.println() en Java

/*
Programa: lista de instrucciones. 
Script: son pequeños programas que van a contener instrucciones
instruccion: es una declaracion de valores, variables, operadores, expresiones, palabras claves o reservadas y comentarios.Programa
*/
/* este es un comentario
de muchas 
lineas
*/

var texto="hola mundo"  // este comentario es de una linea 

/* VARIABLES 
especie de "cajitas" en que podemos guardar información para trabjar con ella (modificarla,eliminarla, crearla)
*/
var numero; // definir una variable 
numero=100;  // asignamos el valor 100 a la variable numero

var text="este es el texto"; // creacion y asignacion en la misma linea

//var proposicion = True; // variable con valor boolean (verdadero y falso)

var a=b=c=4; // creacion de 3 variables y asignacion de las 3 al mismo tiempo
/*
var a;
a=4;
var b;
b=4;
var c;
c=4;
*/
a=10; // cambie el valor que tenía por 10

/* operaciones  */
/* existen de 3 tipos:
- asignacion
- aritmeticas
- comparacion  
- operadores logicos
*/
// Operaciones aritmeticas: suma, resta, multiplicacion, division , modulo (resto de la division, elevar potencia)

var suma= a+b;

console.log(suma);
// operaciones de comparacion: <,>,<=,>=, ==, !=, ===, !==

/*instrucciones de control */
if ( a > b ) {  // pregunto si a es mayor que b
    console.log("a es mayor b");
}
else if (  a < b    ){// pregunto si a es menor que b
    console.log("a es menor b");
}
else  if (  a == b    ){// pregunto si a es igua que b, si pongo a=b estoy asignando el valor de b en a
    console.log("a es igual b");
}

if (  a != b    ){// pregunto si a es igua que b, si pongo a=b estoy asignando el valor de b en a
    console.log("a es distinto b");
}
else {
    console.log("a es iguales b");
}

var f=10;
var e="10";

if (f==e){
    console.log("son iguales");
}

if (f===e){
    console.log("son iguales");
}
else{
    console.log("son distintos");
}

/*OPERADORES LÓGICOS */
// AND && , OR ||, NOT ! 
if (a > b  &&  e=="5"){
    console.log("ambas condiciones son ciertas");
}
else if ( (a > b  || e=="5" ) && (f==10) ) {
    console.log("alguna de las condiciones (o ambas) es ciertas");
}

// ITERACIONES
// sirven para.....ciclo que se repite para una condición 
// FOR : cuando sabemos la cantidad de ciclo o iteraciones que debemos hacer 
// WHILE : cuando sabemos la condicion de continuar  

//FOR
/*
FOR(inicio :mi casa; condicion iteracion:si llevo 10 pasos termino ; paso: caminar un paso){
    instrucciones
}

//WHILE

WHILE(condicion de iteracion(si aun no llego a la esquina) ){
    instrucciones (dar un paso)
}

*/
//ejemplo FOR
//PARENTESIS 
//CONCATENACION: juntar dos texto
var texto_1="Hola";
var texto_2=" Mundo";
var concatenacion=texto_1+texto_2;
console.log(concatenacion);


for (var paso=0; paso < 10; paso=paso+1){
    console.log("vamos en el paso:" + paso);
}

var caminata=0;
var esquina = 15;
while(caminata <= esquina){
    console.log("vamos en camino:" + caminata);
    caminata=caminata+1; 
}

console.log("caminata:" + caminata);













