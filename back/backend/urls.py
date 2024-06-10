# backend/urls.py
from django.urls import path
from .views import student_register, staff_register, student_login

urlpatterns = [
    path('api/student/register', student_register, name='student_register'),
    path('api/staff/register', staff_register, name='staff_register'),
    path('api/student/login', student_login, name='student_login'),
]
