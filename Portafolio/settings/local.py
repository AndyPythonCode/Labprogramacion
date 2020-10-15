from .base import *
from .database import SQLITE3

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [] #Por defecto en el localhost

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = SQLITE3
