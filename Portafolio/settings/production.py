import django_heroku
from .base import *
from .database import SQLITE3

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['andyarciniega.herokuapp.com', '127.0.0.1']

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = SQLITE3

django_heroku.settings(locals())