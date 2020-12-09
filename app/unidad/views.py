from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def biografia(request):
    return render(request, 'biografia_horario.html')

@login_required
def etiqueta(request):
    return render(request, 'cien_etiquetas.html')

@login_required
def banreservas(request):
    return render(request, 'banreservas.html')

@login_required
def cedula(request):
    return render(request, 'cedula.html')

@login_required
def menuDinamico(request):
    return render(request, "menuDinamico.html")

@login_required
def codigoQR(request):
    return render(request, "codigoQR.html")

@login_required
def formularioTabs(request):
    return render(request, "multi-tabs.html")

@login_required
def grafico(request):
    return render(request,'grafico.html')

@login_required
def rest_api(request):
    return render(request, 'api.html')