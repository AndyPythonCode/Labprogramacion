const input = document.getElementsByTagName("input")

input[1].placeholder = "Usuario"
input[2].placeholder = "Contraseña"

for(let elemento in input){
    input[elemento].className = 'input100';
}