$(document).ready(function(){

    $('#mi_boton').on('click',function(){
        alert('y chao!');
        $('#mi_boton').off('click');
    });

    // al presionar el boton con id=animacion quiero ocultar la imagen
    //receta para usar jquery
    //1.- selectores
    //2.- dar al selector un evento
    //3.- realizar acciones cuando el evento del selector se dispare

    $('#animacion1').on('click',function(){
        $('#img_animada').fadeOut(3000);
    });

    $('#animacion2').on('click',function(){
        $('#img_animada').fadeIn(2000);
    });
    $('#animacion3').on('click',function(){
        $('#img_animada').slideToggle();
    });

    $('.parrafo').on('click',function(){
        $(this).addClass('parrafo_grande');
    });

    $('.parrafo').on('dblclick',function(){
        $(this).removeClass('parrafo_grande');
        $(this).css('font-weight','bold');
    });

    $( "#clickme" ).on( "click", function() {
        $( "#book" ).animate({
          opacity: 0.25,
          left: "+=50",
          height: "toggle"
        }, 2000, function() {
          // Animation complete.
        });
      });

      $('#poke_form').on('submit',function(e){
          e.preventDefault(); // evita que el formulario se envie
          poke_id=$('#poke_id').val(); // obtener el id del pokemon que queremos
          url="https://pokeapi.co/api/v2/pokemon/"+poke_id; // armamos la url para solicitar la informacion de la API
          $.get(url,function(response){
                $('#name').text(response.name);
                console.log(response);
          })
          //AXIOS es otra libreria
          $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon/'+poke_id,
            type:'GET',
            success: function(respuesta){
                tipos=respuesta.types;
                resultado="";
                $.each(tipos,function(index,value){
                    resultado=resultado+';'+value.type.name;
                })
                var imagen=respuesta.sprites.front_default;
                console.log(imagen);
                $('#pokemon_img').html('');
                $('#pokemon_img').append(" <img  src="+imagen+">");
                $('#tipo').text(resultado);
            },
            error: function(error){
                // instrucciones en caso de error
            }
          })
      })


});