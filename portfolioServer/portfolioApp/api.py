from portfolioApp.models import PortfolioInfo
from rest_framework import viewsets
from portfolioApp.serializers import PortfolioInfoSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

# class PortfolioInfoViewSet(viewsets.ModelViewSet):

#     queryset = PortfolioInfo.objects.filter(show=True)
#     serializer_class = PortfolioInfoSerializer
