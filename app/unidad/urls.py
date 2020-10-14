from app.unidad.views import base
from django.urls import path
from . import views 

urlpatterns = [
    path('', views.base, name='home'),
    path('biografia/', views.biografia, name='biografia'),
]