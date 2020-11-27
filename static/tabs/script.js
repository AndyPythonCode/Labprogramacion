/*
Funcionamiento:
*Se necesita tener todos los campos llenos
*al menos añadir uno en cada sección(Familiares, Condiciones Pre-existente, Internamientos Realizados)
Cuando añades, te muestra abajo en la tabla y se guarda en el localStorage (Si reinicia no se pierde)

Ojo: Tienes una imagen del mismo (Prueba.png).
*/


const seccion = document.querySelectorAll(".container .tabOpcion button");//Se selecciona todos los titulos 
const contenido = document.querySelectorAll(".container .tabContenido");//Se selecciona todos los contenido
const form = document.getElementById("formulario");

form.addEventListener('submit', (e)=>{
  if(ejecuta()){
    colocar();
    e.preventDefault();
  }else{
    e.preventDefault();
  }
})

function ejecuta(){
  var bandera = valida('.paciente input');
  bandera = cargados()
  var error = document.getElementById("error");
  bandera ? error.innerHTML = "" : error.innerHTML = "Llene los campos y agrege por lo menos una";
  return bandera;
}

function mostrarTab(tabIndex){
  contenido.forEach(function(config){
    config.style.display="none";//Se le coloca display:none para que solo vea el señalado
  })

  contenido[tabIndex].style.display="block";//EL que quiere mostrar
  index(tabIndex);
  return false;
}

function valida(lugar){
  var bandera = true;
  var entrada = document.querySelectorAll(lugar);
  entrada.forEach(function(elemento){
    if(elemento.value.trim() == ""){
      elemento.className = "form-control border border-danger";
      bandera = false;
    }else{
      elemento.className ="form-control border border-success";
    }
  })
  return bandera;
}

function index(tabIndex) {
  var guia = document.querySelectorAll(".guia");
  guia.forEach(function(clase){
    clase.className = "guia";
  })
  guia[tabIndex].className += " activo";
}

function agregar(elementos, lista, id){
  var error = document.getElementById("error");
  var entrada = document.querySelectorAll(elementos);

  if(valida(elementos)){
    var ol = document.getElementById(lista);
    var li = document.createElement("li");
    var vista = "";
    //Tomar el valor
    entrada.forEach(function(li){
      vista += ` ${li.value}`;
      li.value = ""; //Borrar input
    })
    li.setAttribute("id", id + document.querySelectorAll( `[id^="${lista}"] li`).length);
    li.appendChild(document.createTextNode(vista))
    ol.appendChild(li);
    error.innerHTML = "";
  }else{
    error.innerHTML = "Todos los campos necesitan estar llenos";
  }
}

function borrar(lista, id){
  var ol = document.getElementById(lista);
  var lugar = document.getElementById(`${id}${document.querySelectorAll( `[id^="${lista}"] li`).length-1}`);
  ol.removeChild(lugar);
}

function cargados(){
  var bandera = true;
  if(document.querySelectorAll(`[id^="lista-dinamica-1"] li`).length<=0){
    bandera = false;
  }else if(document.querySelectorAll(`[id^="lista-dinamica-2"] li`).length<=0){
    bandera = false;
  }
  else if(document.querySelectorAll(`[id^="lista-dinamica-3"] li`).length<=0){
    bandera = false;
  }
  return bandera;
}

function mostrarDatos(){
  let persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: document.getElementById("edad").value,
    nacionalidad: document.getElementById("nacionalidad").value,
    cedula: document.getElementById("cedula").value,
    telefono: document.getElementById("telefono").value,
    familiar: string_Html(document.querySelectorAll("[id^='lista-dinamica-1'] li")),
    condicion: string_Html(document.querySelectorAll("[id^='lista-dinamica-2'] li")),
    internado: string_Html(document.querySelectorAll("[id^='lista-dinamica-3'] li"))
  };
  guardar(persona);
  verLocalStorage();
  return persona;
}

function colocar(){
  var persona = mostrarDatos();
  var tabla = document.getElementById("tablaDinamica");
  var tr = document.createElement("tr");

  for(const value of Object.values(persona)){
    var td = document.createElement("td");

    td.style = "white-space: pre-wrap";
    td.appendChild(document.createTextNode(value));
    tr.appendChild(td);
    tabla.appendChild(tr);
  }
}

function string_Html(valor){
  var guardar = ``;
  var numero = 1;
  valor.forEach(function(elemento){
    guardar += `${numero++}- ${elemento.innerText}
    `
  })
  return guardar;
}

function guardar(persona){
  localStorage.setItem(localStorage.length, JSON.stringify(persona))
}

function verLocalStorage(){
    var length = localStorage.length
    if(length){
      for(let i = 0; i<length; i++){
        var tabla = document.getElementById("tablaDinamica");
        var tr = document.createElement("tr");
        var persona = JSON.parse( localStorage.getItem(i))
        for(const value of Object.values(persona)){
          var td = document.createElement("td");
      
          td.style = "white-space: pre-wrap";
          td.appendChild(document.createTextNode(value));
          tr.appendChild(td);
          tabla.appendChild(tr);
        }
      }
    }
}
