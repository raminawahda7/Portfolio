from django.contrib import admin
from django.urls import path
from rest_framework import routers
from portfolioApp.views import PortfolioInfoList

# router = routers.DefaultRouter()
# router.register('portfolio/',PortfolioInfoViewSet)

# urlpatterns = router.urls
urlpatterns = [
    path('', PortfolioInfoList.as_view()),
]