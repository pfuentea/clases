$(document).ready(function(){

    //manipulacion de un formulario
    $('#formulario').submit(function(e){
        e.preventDefault();
        var nombre=$('#nombre').val();
        var email=$('#email').val();
        var opcion=$('#opcion option:selected').text();    

        $('#t_name').text(nombre);
        $('#t_email').text(email);
        $('#t_opcion').text(opcion);

        $('#status').val("Formulario Enviado!");
    });

    // ejemplo de iterar un arreglo en jquery
    $('button').on('click',function(){
        var mi_arreglo=[1,2,3,4];

        $.each(mi_arreglo,function(index,value){
            console.log('index:'+index+'/valor:'+value);
        })
    });

});