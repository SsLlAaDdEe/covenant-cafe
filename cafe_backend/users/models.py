from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    student_id = models.CharField(max_length=30, unique=True, null=True, blank=True)
    staff_id = models.CharField(max_length=30, unique=True, null=True, blank=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username
