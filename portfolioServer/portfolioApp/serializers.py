from rest_framework import serializers
from portfolioApp.models import PortfolioInfo

# project serializer

class PortfolioInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PortfolioInfo
        fields = ['name','description','github','demo','image']