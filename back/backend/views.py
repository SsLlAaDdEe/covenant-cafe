# backend/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from .models import Student, Staff
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from .serializers import RegisterSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class StudentRegisterView(APIView):
    def post(self, request):
        data = request.data
        data['username'] = data['student_id']
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Student registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentLoginView(APIView):
    def post(self, request):
        student_id = request.data.get('student_id')
        password = request.data.get('password')
        user = authenticate(request, username=student_id, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class StaffRegisterView(APIView):
    def post(self, request):
        data = request.data
        data['username'] = data['staff_id']
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Staff registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StaffLoginView(APIView):
    def post(self, request):
        staff_id = request.data.get('staff_id')
        password = request.data.get('password')
        user = authenticate(request, username=staff_id, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


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