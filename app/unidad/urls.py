from os import name
from app.unidad.views import base
from django.urls import path
from . import views 

urlpatterns = [
    path('', views.base, name='home'),
    path('biografia/', views.biografia, name='biografia'),
    path('etiquetas/', views.etiqueta, name='etiqueta'),
    path('banreservas/', views.banreservas, name='banco'),
]