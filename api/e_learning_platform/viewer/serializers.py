from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Team, Course, Lesson, Post


class SimpleCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'name')
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('symbol', 'year_start', 'supervisor')


class CourseSerializer(serializers.ModelSerializer):
    teacher = UserSerializer()
    class Meta:
        model = Course
        fields = ('id', 'name', 'teacher', 'team')


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'name')

class LessonDetailSerializer(serializers.ModelSerializer):
    course = SimpleCourseSerializer()
    class Meta:
        model = Lesson
        fields = ('id', 'name', 'description', 'course')

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    class Meta:
        model = Post
        fields = ('id', 'author', 'course', 'content', 'published')




