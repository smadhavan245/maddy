from rest_framework import serializers
from .models import login
class loginserializers(serializers.Hyperl-inkedModelSerializer):
    class Meta:
                model=login
                fields=("username","password")
    