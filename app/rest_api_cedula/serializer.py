from rest_framework import serializers

class Cedula(serializers.Serializer):
    dni = serializers.CharField()
