from django.urls import path
from . import views 

urlpatterns = [
    path('home', views.base, name='home'),
    path('biografia/', views.biografia, name='biografia'),
    path('etiquetas/', views.etiqueta, name='etiqueta'),
    path('banreservas/', views.banreservas, name='banco'),
    path('cedula/',views.cedula, name="cedula"),
    path('menu/',views.menuDinamico, name="menu"),
    path('codigoQR', views.codigoQR, name="qr"),
    path('tabs/',views.formularioTabs, name="tabs"),
    path('grafico/',views.grafico, name='grafico'),
]