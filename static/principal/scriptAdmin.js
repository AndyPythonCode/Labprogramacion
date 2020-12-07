let admin = document.querySelectorAll("tr th a i")

admin.forEach(function(element){
    element.innerHTML = " Click!!, Admin Puede Descargar";
    element.className = "fas fa-cloud-download-alt";
})