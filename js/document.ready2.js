// JavaScript Document
$(document).on("ready", inicio)

    function inicio(){
    $("#container img").on("click", abrirfull);
    $("#imgFull").on("click", cerrarFull)
   }
   function abrirfull(){
    //alert($(this).attr('alt'));
    var nombre = $(this).attr('alt') + "_big";
    var direccion = "img/" + nombre + ".jpg";

    $("#imgFull").attr('src', direccion);

    $("#previa").fadeIn();
   }
   function cerrarFull(){
    $("#previa").fadeOut();
    //$("#previa").hide();
   }