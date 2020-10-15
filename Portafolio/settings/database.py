from .base import BASE_DIR

SQLITE3 = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

POSTGRESQL = {
    'default': {

        'ENGINE': 'django.db.backends.postgresql_psycopg2',

        'NAME': 'd44u9sqp0vbluj',

        'USER': 'qdfznnqdzjvqbe',

        'PASSWORD': '1abf730b3f91c01f42b81f6a4990a400b649cc7e4d69281c718d69d85d7f43a3',

        'HOST': 'ec2-54-152-40-168.compute-1.amazonaws.com',

        'PORT': '5432',
    }
}