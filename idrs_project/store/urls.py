from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
     path('dashboard/', views.dashboard, name='dashboard'),
     path('dashboard/destinations-detail', views.destinations_detail, name='destinations-detail'),

        # API endpoint
    path('api/login/', views.login, name='login'),
     path('api/register/', views.register, name='register'),
]