from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, CourseViewSet, LessonViewSet, PostViewSet

router = DefaultRouter()
router.register('teams', TeamViewSet, basename='teams')
router.register('courses', CourseViewSet, basename='courses')
router.register('lessons', LessonViewSet, basename='lessons')
router.register('posts', PostViewSet, basename='posts')

urlpatterns = router.urls