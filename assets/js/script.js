
var formulario = document.getElementById('boton');
var section = document.getElementById('section1');
function show(){
  /*creando el formulario cuando se hace click */
  var form = document.createElement('form');
  form.classList.add('formu');
  var texto = document.createElement('textarea');
  texto.classList.add('text');
  texto.setAttribute("placeholder", "Añadir una lista...");
  var boton2 = document.createElement('button');
  boton2.classList.add('botonGuardar');
  var icon = document.createElement("i");
  icon.classList.add("class","fa","fa-plus");
  var nodoText = document.createTextNode('Guardar');
  boton2.appendChild(nodoText);
  form.appendChild(texto);
  form.appendChild(boton2);
  form.appendChild(icon);
  section.removeChild(formulario);
  section.appendChild(form);
  /*agregar la lista a la pagina cuando se presione el guardar, crear un evento para guardar*/
  boton2.addEventListener('click',function(){

  /*almacenar el valor que entrega el usuario*/
      var list = document.getElementsByClassName('text')[0].value;
  /*limpiar el campo de añadir comentario del textarea*/
      document.getElementsByClassName('text')[0].value = "";
    /*creando la sección de las listas*/
      var newList = document.createElement('div');
      newList.classList.add('lista');
    /*creando el p de la lista guardada*/
      var paragraph = document.createElement('p');
      paragraph.classList.add('p-list');
    /*hay que crear el texto que va dentro del p*/
      var nodoText = document.createTextNode(list);
      /*crear el elemento que va a añadir una tarjeta*/
      var tarjeta = document.createElement('a');
      tarjeta.setAttribute("href", "#");
      tarjeta.classList.add('tarjeta');
      /*crear el texto que lleva dentro*/
      var textoAñadir = document.createTextNode('Añadir una tarjeta...');
    /*metiendo el texto en p*/
      paragraph.appendChild(nodoText);
      tarjeta.appendChild(textoAñadir);
    /*agregando el parrafo en la nueva lista*/
      newList.appendChild(paragraph);
      newList.appendChild(tarjeta);
    /*ahora hay que agregar el la nueva lista a la seccion*/
      section.appendChild(newList);
      /*evento para que se pueda escribir en añadir una tarjeta*/
      tarjeta.addEventListener('click',function(){
        var newForm = document.createElement('form');
        newForm.classList.add('newForm');
        var newTexto = document.createElement('textarea');
        newTexto.classList.add('newText');
        var newBoton = document.createElement('button');
        newBoton.classList.add('botonAñadir');
        var nodoText = document.createTextNode('Añadir');
        newBoton.appendChild(nodoText);
        newForm.appendChild(newTexto);
        newForm.appendChild(newBoton);
        newList.removeChild(tarjeta);
        newList.appendChild(newForm);
        /*evento para que se añada una tarjeta*/
        newBoton.addEventListener('click',function(){
          /*almacenar el valor que entrega el usuario*/
              var añadirTarjeta= document.getElementsByClassName('newTexto')[0].value;
          /*limpiar el campo de añadir comentario del textarea*/
              document.getElementsByClassName('newTexto')[0].value = "";
            /*creando la sección de las tarjetas*/
              var newTarjeta = document.createElement('div');
              newTarjeta.classList.add('newTarjeta');
            /*creando el p de la lista guardada*/
              var paragraphTarjeta = document.createElement('p');
              paragraphTarjeta.classList.add('p-tarjeta');
            /*hay que crear el texto que va dentro del p*/
              var nodoTarjeta = document.createTextNode(añadirTarjeta);
            /*metiendo el texto en p*/
              paragraphTarjeta.appendChild(nodoTarjeta);
            /*agregando el parrafo en la nueva lista*/
              newTarjeta.appendChild(paragraphTarjeta);
            /*ahora hay que agregar el la nueva lista a la seccion*/
              newList.appendChild(newTarjeta);

        })
      })

  })
}

/*NUEVOS PASOS A SEGUIR
1.
CACHIN crear un hipervinculo como boton de añadir una tarea en el html
CACHIN PARECE crear un formulario en js con textarea y boton
CACHIN al hacer click reemplazar el hipervinculo por el formulario (replace? algo asi)
2.
CACHIN hacer que el boton guardar guarde las listas a la izquierda del formulario (que este se corra a la derecha)
crear texto añadir tarea en la lista

*/
