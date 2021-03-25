from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, LessonListView, PostViewSet, LessonDetailView, TeamDetailView

from django.urls import path

router = DefaultRouter()
router.register('courses', CourseViewSet, basename='courses')
# router.register('lessons', LessonViewSet, basename='lessons')
router.register('posts', PostViewSet, basename='posts')

urlpatterns = router.urls + [
    path('lessons/', LessonListView.as_view()),
    path('lessons/<pk>/', LessonDetailView.as_view()),
    path('teams/', TeamDetailView.as_view())
]