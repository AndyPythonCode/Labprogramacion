from django.urls import path
from . import views

urlpatterns = [
    path('validar_cedula/',views.AndyArciniegaRest.as_view(), name="rest"),
]
