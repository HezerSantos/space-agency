from django.urls import path
from . import views

app_name = "systems"

urlpatterns = [
    path('home/', views.home, name='home'),
    path('missions/', views.missions, name = 'missions'),
    path('astronauts/', views.astronauts, name = 'astronauts'),
]