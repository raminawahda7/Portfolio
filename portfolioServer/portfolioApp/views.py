from django.shortcuts import render
from portfolioApp.serializers import PortfolioInfoSerializer
from rest_framework import generics   # for post and get 
from portfolioApp.models import PortfolioInfo

# Create your views here.
class PortfolioInfoList(generics.ListCreateAPIView):
    queryset=PortfolioInfo.objects.all()
    serializer_class=PortfolioInfoSerializer