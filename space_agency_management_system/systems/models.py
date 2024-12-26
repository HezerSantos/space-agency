from django.db import models

class Mission(models.Model):
    mission_name = models.CharField(max_length = 200, unique = True)
    launch_date = models.DateField()
    mission_location = models.CharField(max_length = 200)
    mission_phase = models.CharField(max_length = 10)

class Astronaut(models.Model):
    name = models.CharField(max_length = 200)
    affilliated_space_program = models.CharField(max_length = 200)
    accumulated_space_time = models.PositiveIntegerField()
    is_active = models.BooleanField()
# Create your models here.
