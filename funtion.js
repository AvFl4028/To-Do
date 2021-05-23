(function(){
    //Variables
    var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
    //Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
        nuevaTarea = document.createElement('li'),
        enlace = document.createElement('a'),
        contenido = document.createTextNode(tarea);
    console.log('Creando tarea');

    //Se agragaron contenido para los enlaces
    enlace.appendChild(contenido);
    //Le establacemos atributo href
    enlace.setAttribute('href', '#');
    //Agregamos enlace a la nueva tarea
    nuevaTarea.appendChild(enlace);
    //Se agrega nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";
    for (var i = 0; i <= lista.children.length; i++) {
        lista.children[i].addEventListener('click',  function(){
            this.parentNode.removeChild(this);
        });
    }

    }
    var eliminarTarea = function(){
        console.log('Eliminando Tarea');
        this.parentNode.removeChild(this)
    }
    //Eventos
    btnNuevaTarea.addEventListener('click', agregarTarea);

    for (var i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener('click', eliminarTarea);
    }
    console.log(lista.children.length)
    console.log("Todo esta bien");
}())