# backend/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Student, Staff
import json

@csrf_exempt
def student_register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            Student.objects.create(
                first_name=data['first_name'],
                last_name=data['last_name'],
                student_id=data['student_id'],
                email=data['email'],
                password=data['password']
            )
            return JsonResponse({'message': 'Student registered successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def staff_register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            Staff.objects.create(
                staff_id=data['staff_id'],
                email=data['email'],
                password=data['password']
            )
            return JsonResponse({'message': 'Staff registered successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
