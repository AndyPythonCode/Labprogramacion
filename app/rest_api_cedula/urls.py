from django.urls import path
from . import views

urlpatterns = [
    path('validar_cedula/',views.HolaMundo.as_view(), name="api"),
]
