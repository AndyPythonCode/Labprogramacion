from rest_framework.views import APIView
from rest_framework.response import Response

class HolaMundo(APIView):
    def get(self, request, format=None):
        mensaje = ["Esta Rest Api recibe una cedula por un metodo Post y te señala si la cedula es valida o no."]
        return Response({'Mensaje':mensaje})