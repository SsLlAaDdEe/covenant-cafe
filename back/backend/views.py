# backend/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
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

@csrf_exempt
def student_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        student_id = data.get('student_id')
        password = data.get('password')
        try:
            student = Student.objects.get(student_id=student_id)
            if student.check_password(password):
                return JsonResponse({
                    'message': 'Login successful',
                    'name': student.first_name,
                    'balance': student.account_balance,
                    'transaction_history': list(student.transaction_set.all().values())
                })
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=400)
        except Student.DoesNotExist:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)