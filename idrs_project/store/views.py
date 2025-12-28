from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

User = get_user_model()

def home(request):
    return render(request, 'store/index.html')

# def login(request):
#     return render(request, 'store/login.html')
@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Get user by email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({'status': 'fail', 'message': 'User not found'}, status=404)

            # Authenticate using username (because Django's auth uses username)
            user = authenticate(email=user.email, password=password)
            if user is not None:
                return JsonResponse({'status': 'success', 'message': 'Login successful'})
            else:
                return JsonResponse({'status': 'fail', 'message': 'Incorrect password'}, status=401)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Only POST allowed'}, status=405)

    # if request.method == "POST":
    #     email = request.POST.get("email")
    #     password = request.POST.get("password")

    #     # Assuming your User model uses email as username, else you need to get username from email
    #     user = authenticate(request, username=email, password=password)
    #     if user is not None:
    #         auth_login(request, user)
    #         return redirect("dashboard")  # name of your dashboard URL
    #     else:
    #         messages.error(request, "Invalid email or password")
    #         return render(request, "store/login.html", {"email": email})
    # else:
    #     return render(request, "store/login.html")


# def register(request):
#     return render(request, 'store/register.html')
@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            full_name = data.get('full_name')
            password = data.get('password')

            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already registered'}, status=400)

            user = User.objects.create_user(email=email, full_name=full_name, password=password)
            return JsonResponse({'success': True}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
       return render(request, 'store/register.html')
    # if request.method == "POST":
    #     full_name = request.POST.get('fullName')
    #     email = request.POST.get('email')
    #     password = request.POST.get('password')
    #     confirm_password = request.POST.get('confirmPassword')

    #     if password != confirm_password:
    #         messages.error(request, "Passwords do not match")
    #         return render(request, 'store/register.html')

    #     if User.objects.filter(email=email).exists():
    #         messages.error(request, "Email already registered")
    #         return render(request, 'store/register.html')

    #     # Create custom user
    #     user = User.objects.create(
    #         email=email,
    #         full_name=full_name,
    #         password=make_password(password)
    #     )
    #     messages.success(request, "Registration successful! Please log in.")
    #     return redirect('/login')

    # return render(request, 'store/register.html')

def dashboard(request):
    return render(request, 'store/dashboard.html')

def destinations_detail(request):
    return render(request, 'store/destinations-detail.html')
