
$(".nombre").append("Guadalupe");
$(".apellido").append("Frias");
const contenido_acerca_de=document.getElementById("contenido_acerca_de");
$("#edicion_formulario").hide();
const edicionFormulario=document.getElementById("edicionFormulario");

document.getElementById("boton_eliminar").onclick = eliminar;
function eliminar() {
   contenido_acerca_de.remove()
  }

document.getElementById("boton_edicion").onclick = edicion;
function edicion() {
  document.getElementById("edicion_formulario").innerText = edicionFormulario;
  }



/*
$('#boton_edicion').click(function(){
    $('#myModal').modal(('show'))
});
$('#myModal').on('shown.bs.modal', function(){
    console.log("mostrando modal");
});
*/