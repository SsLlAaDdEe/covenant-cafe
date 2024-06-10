# backend/urls.py
from django.urls import path
from .views import student_register, staff_register

urlpatterns = [
    path('api/student/register/', student_register, name='student_register'),
    path('api/staff/register/', staff_register, name='staff_register'),
]
