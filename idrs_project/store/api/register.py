import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model

User = get_user_model()

@csrf_exempt
def api_register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            full_name = data.get("full_name")
            password = data.get("password")

            print(f"Received: email={email}, full_name={full_name}, password={password}")  # Debug

            if not email or not password:
                return JsonResponse({"error": "Email and password are required"}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({"error": "Email already registered"}, status=400)

            user = User.objects.create_user(email=email, full_name=full_name, password=password)
            return JsonResponse({"success": True}, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request"}, status=405)
