from django.contrib import admin
from django.urls import path, include

from viewer.models import Team, Course, Lesson, Post
from accounts.models import Profile

# admin.site.register(Team)
# admin.site.register(Course)
# admin.site.register(Lesson)
# admin.site.register(Post)
# admin.site.register(Profile)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/viewer/', include('viewer.urls')),
    path('api/accounts/', include('accounts.urls'))
]
