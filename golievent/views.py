from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
#import stripe
# Create your views here.

#stripe.api_key = settings.STRIPE_SECRET_KEY


# def home(request):
#     """
#     Page principale avec le ticket + bouton de paiement.
#     On affiche un message si Stripe nous renvoie avec ?success=1 ou ?canceled=1
#     """
#     status = None
#     if request.GET.get("success") == "1":
#         status = "success"
#     elif request.GET.get("canceled") == "1":
#         status = "canceled"

#     context = {
#         "stripe_public_key": settings.STRIPE_PUBLIC_KEY,
#         "payment_status": status,
#     }
#     return render(request, "base.html", context)

def home(request):
    return render(request, "base.html")

# @csrf_exempt
# def create_checkout_session(request):
#     """
#     API appelée en AJAX depuis la page quand on clique sur 'Payer Maintenant'.
#     Renvoie l'ID de session Stripe en JSON.
#     """
#     if request.method != "POST":
#         return JsonResponse({"error": "Méthode non autorisée"}, status=405)

#     try:
#         checkout_session = stripe.checkout.Session.create(
#             payment_method_types=["card"],
#             mode="payment",
#             line_items=[
#                 {
#                     "price_data": {
#                         "currency": "eur",
#                         "product_data": {
#                             "name": "Harmonia - Student Ticket",
#                         },
#                         "unit_amount": 2000,  # 20.00€ (en centimes)
#                     },
#                     "quantity": 1,
#                 },
#             ],
#             # Tu pourras personnaliser success/cancel si tu veux
#             success_url=request.build_absolute_uri("/?success=1"),
#             cancel_url=request.build_absolute_uri("/?canceled=1"),
#         )

#         return JsonResponse({"id": checkout_session.id})

#     except Exception as e:
#         print("Stripe error:", e)
#         return JsonResponse({"error": "Erreur Stripe"}, status=500)


def create_checkout_session(request):
    return render(request, "success.html")

def success(request):
    return render(request, "success.html")

def cancel(request):
    return render(request, "cancel.html")
