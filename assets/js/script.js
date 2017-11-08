
var formulario = document.getElementById('boton');
var section = document.getElementById('section1');
function show(){
  /*creando el formulario cuando se hace click */
  var form = document.createElement('form');
  var texto = document.createElement('textarea');
  var boton2 = document.createElement('button');
  var icon = document.createElement("i");
  form.classList.add('formu');
  texto.classList.add('text');
  boton2.classList.add('botonGuardar');
  icon.classList.add("class","fa","fa-plus");
  var textoarea = document.createTextNode('Añadir una lista...');
  var nodoText = document.createTextNode('Guardar');
  texto.appendChild(textoarea);
  boton2.appendChild(nodoText);
  form.appendChild(texto);
  form.appendChild(boton2);
  form.appendChild(icon);
  section.removeChild(formulario);
  section.appendChild(form);
  /*limpiar el campo de añadir comentario del textarea*/
  document.getElementsByClassName('text').value = "";

}
/*NUEVOS PASOS A SEGUIR
1.
CACHIN crear un hipervinculo como boton de añadir una tarea en el html
CACHIN PARECE crear un formulario en js con textarea y boton
al hacer click reemplazar el hipervinculo por el formulario (replace? algo asi)
2.
hacer que el boton guardar guarde las listas a la izquierda del formulario (que este se corra a la derecha)
crear texto añadir tarea en la lista

*/
