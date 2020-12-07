let user = document.querySelectorAll("tr th a i")

user.forEach(function(element){
    element.innerHTML = " Solo Admin Puede Descargar";
    element.className = "far fa-frown";
})