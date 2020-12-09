from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import Cedula

class AndyArciniegaRest(APIView):
    """
    Los serializadores son unos de los componentes más poderosos que tiene Django Rest Framework. Estos permiten que estructuras complejas y modelos de nuestro proyecto en Django sean convertidos a estructuras nativas de Python y puedan ser convertidas fácilmente en JSON o XML. 
    
    ¿Quieres hacer una prueba?
    Solo ve a donde dice DNI, coloca tu cedula, dale a POST y verás la data generada, si deseas ver como la consumi solo tienes que ir al menu principal y descargar el archivo de REST API CEDULA, verás como hice la respectiva llamada con FETCH con el lenguaje de javascript.
    """
    serializer_class = Cedula
    cedula_validada = False
    
    #Metodo de prubea
    def get(self, request, format=None):
        mensaje = ["Esta Rest Api recibe una cedula por un metodo Post y te señala si la cedula es valida o no."]
        return Response({'Mensaje':mensaje})
    
    #El metodo post donde llega la cedula
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            dni = serializer.validated_data.get('dni')
            message = self.validarCedula(dni)
            return Response({'mensaje':message, 'cedula':dni, 'estado':self.cedula_validada})
        else:
            return Response(
                serializer.errors,
                status = status.HTTP_400_BAD_REQUEST
            )
    
    #La validacion con python
    def validarCedula(self, valor):
        limpiar = valor.replace('-','') # limpiamos el valor que nos pasa si tiene -
        cedula = limpiar[0:len(limpiar)-1] # almacenamos valos limpio sin identificador
        verificador = limpiar[len(limpiar)-1:] # sacamos el verificador el ultimo valor
        resultado = 0 # Suma de todos
        INTERCALAR = [1,2,1,2,1,2,1,2,1,2] # constante que se necesita
        #print(f"limpiamos:{limpiar} | cedula: {cedula} | verificador: {verificador}")
        if len(limpiar) == 11: # Verificamos si tiene 11 digitos lo estandar
            if limpiar.isdigit(): # Si son valores numeros
                for i in range(len(cedula)): # recoremos la longitud de cedula sin verificador
                    x = int(cedula[i])*INTERCALAR[i] # multiplicamos por constante
                    if x >= 10:# si el valor es mayor o igual a 10 se suman separados
                        separar = list(str(x)) # separamos el valor 1 y 2 si son mayores
                        x = int(separar[0]) + int(separar[1]) # sumamos y guardamos en ella misma
                    resultado += x # siempre guadamos en resutaldo para ir amacenando valor
                cambiarUltimo = int(list(str(resultado))[0]+"0")# cambiamos el ultimo numero por 0
                decenaSuperior = cambiarUltimo+10 # sumamos 10 para asi poder llegar a la decenaSuperior mas cercana
                if(decenaSuperior-resultado) == int(verificador) or (resultado-cambiarUltimo) == int(verificador):
                    self.cedula_validada = True
                    return "Cedula Validad :D"#Dos opiciones: que la decenaSuperior sea igual que resultado o no.
                else:
                    return "Cedula Invalidad :( !!"# Si no comple ninguna no es valida
            else:
                return "No son numeros!!"# Si encuentra una letra tampoco
        else:
            return "Valor de digitos estandar fuera de rango!!"# si es valor o menor a 11 no comple estandar