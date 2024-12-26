from django.shortcuts import render
from .models import Mission

def missions(request):
    missions = Mission.objects.all()
    return render(request, 'systems/missionmanagement.html', {'missions': missions})