from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class Formulario(UserCreationForm):
    first_name = forms.CharField(max_length=40)
    last_name = forms.CharField(max_length=40)
    email = forms.EmailField()
    
    class Meta:
        model = User
        fields = ['first_name','last_name','username','email','password1','password2']
