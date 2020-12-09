const input = document.getElementsByTagName("input")

input[1].placeholder = "Nombre Propio"
input[2].placeholder = "Apellido Propio"
input[3].placeholder = "Correo Electronico"
input[4].placeholder = "Nombre de Usuario en el Sistema"
input[5].placeholder = "Contraseña"
input[6].placeholder = "Confirmar Contraseña"

for(let elemento in input){
    input[elemento].className = "input--style-4";
}