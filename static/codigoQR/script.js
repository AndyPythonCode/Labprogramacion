const form = elemento("form");
const error_nombre = elemento("nombre-text");
const error_empresa = elemento("empresa-text");
const error_cargo = elemento("cargo-text");
const error_telf = elemento("telfMovil-text");
const error_correo = elemento("correo-text");

form.addEventListener('submit', (e) => {
    if(validacion())
    {
        elemento("creado").innerHTML = "Codigo QR Creado";
        e.preventDefault()
    }else{
        e.preventDefault()
    }
})

function validacion()
{
    //No validar
    var telefonoHogar = capturar("telefonoH");
    var correoLabora = capturar("correoL");
    //Validar
    var almacen = {"Nombre":[capturar("nombre"), error_nombre], 
                    "Empresa":[capturar("empresa"), error_empresa],
                    "Cargo":[capturar("cargo"), error_cargo],
                    "Telefono":[capturar("telefonoM"), error_telf],
                    "Correo":[capturar("correoI"), error_correo]};
    
    if((almacen.Nombre[0].trim()&&almacen.Empresa[0].trim()&&almacen.Cargo[0].trim()&&almacen.Telefono[0].trim()&&almacen.Correo[0].trim()) !=0)
    {
        vacio(almacen);
        var resultado = validarTelf(almacen.Telefono[0], almacen.Telefono[1])
        resultado += validarCorreo(almacen.Correo[0],almacen.Correo[1])
        if(resultado)
        {
            almacen["TelefonoHogar"] = telefonoHogar
            almacen["CorreoLaborar"] = correoLabora
            crearQR(almacen);
            return true;
        }
    }else{
        vacio(almacen);
        return false;
    }
}

function vacio(almacen){
    for(var i in almacen)
    {
        if(almacen[i][0].trim() == 0)
        {
            (almacen[i][1]).innerHTML = `No se puede dejar vacio ${i}`;
        }else{
            (almacen[i][1]).innerHTML = "";
        }
    }
}

function capturar(variable)
{
    return document.getElementById(variable).value;
}

function elemento(valor)
{
    return document.getElementById(valor);
}

function validarCorreo(correo, error)
{
    var patron = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(correo.match(patron))
    {
        error.innerHTML = "";
        return true;
    }else{
        error.innerHTML = "Correo invalido!!";
    }
}
function validarTelf(numero, error) {
    var patron = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    /* *(123) 456-7890    *(123)456-7890    *123-456-7890    *1234567890 */
    if(numero.match(patron))
    {
        error.innerHTML = "";
        return true;
    }else{
        error.innerHTML = "Numero invalido!!";
    }
}

function crearQR(almacen){
    var imagen = document.querySelector("img");
    var tamano = "150x150";
    var datos = "";
    let servidor = "https://api.qrserver.com/v1/create-qr-code/";
    for(let clave in almacen)
    {
        Array.isArray(almacen[clave]) ? datos += `${clave}: ${almacen[clave][0]} `: datos +=`${clave}: ${almacen[clave]} `
    }
    let envio = `${servidor}?size=${tamano}&data=${datos}`;
    imagen.src = envio;
}

