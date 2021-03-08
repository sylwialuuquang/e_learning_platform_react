from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ProfileViewSet
from .models import CustomAuthToken


router = DefaultRouter()
router.register('profiles', ProfileViewSet, basename='profiles')
# router.register('token-auth', CustomAuthToken.as_view(), basename='token-auth')

urlpatterns = router.urls + [
    path('token-auth/', CustomAuthToken.as_view())
]
