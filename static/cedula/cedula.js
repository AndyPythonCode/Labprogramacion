var cedula = prompt("Digite su cedula"); //Capturamos el valor
var limpiar = cedula.replaceAll("-",""); //Quitamos -
var verificador = cedula.charAt(cedula.length-1); //Sacamos el ultimo valor, verificador
cedula = limpiar.slice(0,limpiar.length-1);//Sacamos todo menos el verificador
const INTERCALAR = [1,2,1,2,1,2,1,2,1,2];//constante que se necesita
var resultado = 0; //Suma de todos los valores para encontrar el identificador

//Me dice si es un numero o no
function esNumero(num){
    return !isNaN(num)
}
//Mensaje para h2
function mensaje(comentario){
    document.getElementById("cedula").innerHTML = comentario;
}

if(limpiar.length == 11)
{
    if(esNumero(limpiar))
    {
        for(let i = 0; i<cedula.length; ++i)
        {
            var x = parseInt(cedula[i])*INTERCALAR[i];
            if(x >= 10)
            {
                var separar = Array.from(x.toString());
                x = parseInt(separar[0]) + parseInt(separar[1]);
            }
            resultado+=x;
        }
        var cambiarUltimo = parseInt(Array.from(resultado.toString())[0]+"0");
        var decenaSuperior = cambiarUltimo+10;
        if((decenaSuperior-resultado == parseInt(verificador)) || (resultado-cambiarUltimo) == parseInt(verificador))
        {
            mensaje("Cedula es Validad :D!!!, su verificador "+verificador+" es Valido");
        }
        else {  mensaje("Cedula no es validad :(!!!, su verificador "+verificador+" es Invalido"); }   
    }
    else
    { mensaje("No son numeros, reinicie");}

}
else { mensaje("Longitud no cumple con el estandar, reinicie"); }




