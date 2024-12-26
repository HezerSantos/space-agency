from django.shortcuts import render
from .models import Astronaut

def astronauts(request):
    astronauts = Astronaut.objects.all()
    return render(request, 'systems/astronautmanagement.html', {'astronauts': astronauts})