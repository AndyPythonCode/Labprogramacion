from django.http import request
from django.shortcuts import render

# Create your views here.
def biografia(request):
    return render(request, 'biografia_horario.html')

def base(request):
    return render(request, 'index.html')

def etiqueta(request):
    return render(request, 'cien_etiquetas.html')

def banreservas(request):
    return render(request, 'banreservas.html')

def cedula(request):
    return render(request, 'cedula.html')

def menuDinamico(request):
    return render(request, "menuDinamico.html")

def codigoQR(request):
    return render(request, "codigoQR.html")

def formularioTabs(request):
    return render(request, "multi-tabs.html")