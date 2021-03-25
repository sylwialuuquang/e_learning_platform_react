from rest_framework import viewsets
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from .models import Team, Course, Lesson, Post
from .serializers import TeamSerializer, CourseSerializer, LessonSerializer, PostSerializer, \
    LessonDetailSerializer


class TeamDetailView(RetrieveAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def get_object(self):
        user = self.request.user
        if user.groups.filter(name='student').exists():
            return user.profile.team 
        if user.groups.filter(name='teacher').exists():
            obj = get_object_or_404(self.queryset, supervisor=user) 
            return obj


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer

    def get_queryset(self):
        if self.request.query_params['view'] == 'teamview':
            if self.request.user.groups.filter(name='student').exists():
                team = self.request.user.profile.team
            elif self.request.user.groups.filter(name='teacher').exists():
                team = Team.objects.filter(supervisor=self.request.user).first()
            return Course.objects.filter(team=team)
     

class LessonListView(ListAPIView):
    # queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def get_queryset(self):
        user = self.request.user
        course_id = self.request.query_params['course_id']
        course = get_object_or_404(Course.objects.all(), id=course_id)
        if self.user_can_access_lessons(user, course):
            return Lesson.objects.filter(course__id=course_id)
    
    @staticmethod
    def user_can_access_lessons(user, course):
        if (user.groups.filter(name='student').exists() and user.profile.team == course.team or
        user.groups.filter(name='teacher').exists() and user == course.teacher):
            return True
        return False
    

class LessonDetailView(RetrieveAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonDetailSerializer

    def get_object(self):
        user = self.request.user
        lesson = get_object_or_404(self.queryset, id=self.kwargs['pk'])
        print(lesson)
        if self.user_can_access_lessons(user, lesson):
            return lesson

    @staticmethod
    def user_can_access_lessons(user, lesson):
        if (user.groups.filter(name='student').exists() and user.profile.team == lesson.course.team or
        user.groups.filter(name='teacher').exists() and user == lesson.course.teacher):
            return True
        return False 


class PostViewSet(viewsets.ModelViewSet):
    # queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.request.user
        if self.request.query_params['view'] == 'teamview':
            team = self.get_user_team(user)
            course = Course.objects.filter(name='Advisory').filter(team=team).first()
            return Post.objects.filter(course=course).order_by('published')
        

        if 'course_id' in self.request.query_params:
            course_id = self.request.query_params['course_id']
            course = get_object_or_404(Course.objects.all(), id=course_id)

            if self.user_can_access_posts(user, course):
                return Post.objects.filter(course__id=course_id).order_by('published')


    @staticmethod
    def user_can_access_posts(user, course):
        if (user.groups.filter(name='student').exists() and user.profile.team == course.team or
        user.groups.filter(name='teacher').exists() and user == course.teacher):
            return True
        return False

    @staticmethod
    def get_user_team(user):
        if user.groups.filter(name='student').exists():
            return user.profile.team
        elif user.groups.filter(name='teacher').exists():
            return Team.objects.filter(supervisor=user).first()
