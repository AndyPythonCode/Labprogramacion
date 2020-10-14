from django.shortcuts import render

# Create your views here.
def biografia(request):
    return render(request, 'biografia_horario.html')

def base(request):
    return render(request, 'index.html')