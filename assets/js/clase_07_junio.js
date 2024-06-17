var numero=10;
var texto="este es un texto";

// ARRAYS - ARREGLOS - LISTAS
// una cajita con muchos compratimientos numerados del 0 al (n-1) 
// 10 compartimientos: 0-1-2-3-4-5-6-7-8-9

var lista_super=['pan','vienesas','tomate','mayonesa','palta','chucrut','salsa americana']; // N=7 elementos...indices del 0 al 6 
//console.log(lista_super.length);

// modificar un elemento del array
lista_super[5]='queso';

lista_super[lista_super.length]='chucrut';

// i++ <==> i=i+1  , i-- <==> i=i-1
for(var i=0; i < lista_super.length ; i++ ){
    //console.log(lista_super[i])
}

// objeto <==> json <==> diccionario

var objeto = {  
    'apellido': 'Rojas',
    'nombre' : 'Cristian',
    'edad': 35,
}

var alumnos=[
    {'nombre': 'Miguel', 'edad': 26}, // indice 0
    {'nombre': 'Rocio', 'edad': 24}, // indice 1
    {'nombre': 'Soledad', 'edad': 31} // indice 2
]

//console.log(objeto['nombre']) ;
// FUNCIONES: 

function sumar_numeros(numero_1,numero_2){
    var numero_01=10;
    var numero_02=15;
    //return numero_1+numero_2;
    console.log(numero_1+numero_2);
    return numero_01+numero_02;
}

// 25 
// 12
// 1015
// -25

var resultado=sumar_numeros(7,5);
console.log(resultado);

// crear una funcion que al pasarle un arreglo entregue como resultado la suma de sus elementos.
// 18:20

//var precios_productos = [1111,2222,3333, 4444,5555,6666,7777] //31108

//var precios_productos = [999,999,999, 999,999,999,999]  // 6993 

var precios_productos= [1,2,3,4,5,6,7,8,9,10]

function total(lista_productos){
    var total=0;
    // 1.- for que pase por los elemento de la lista
    for( var i=0; i< lista_productos.length ; i++ ){
        //sumar los elemento en la variable total
        total=total+lista_productos[i];
    }

    return total;
}

console.log(total(precios_productos));

// EJERCICIO PROPUESTO: crear una funcion que al pasarle un arreglo entregue como resultado el minimo, el maximo y el promedio de los valores










