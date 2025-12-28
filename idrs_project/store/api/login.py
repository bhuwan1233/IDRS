from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login as auth_login

@csrf_exempt
def api_login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")
        password = data.get("password")

        user = authenticate(request, email=email, password=password)
        if user is not None:
            auth_login(request, user)
            return JsonResponse({"success": True})
        else:
            return JsonResponse({"success": False, "message": "Invalid credentials"})

    return JsonResponse({"success": False, "message": "Invalid request"})
