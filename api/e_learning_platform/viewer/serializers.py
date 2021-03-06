from rest_framework import serializers

from .models import Team, Course, Lesson, Post


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('symbol', 'year_start', 'supervisor')


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('name', 'teacher', 'team')


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('name', 'description', 'course')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('author', 'course', 'content', 'published')