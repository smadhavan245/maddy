from rest_framework import viewsets
from.serializers import loginserializers
from .models import login
class loginview(viewsets.ModelViewSet):
    queryset=login.objects.all()
    serializer_class=loginserializers
    