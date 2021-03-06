from django.db.models import Model, CharField, ForeignKey, DO_NOTHING, CASCADE, TextField, DateTimeField
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save



class Team(Model):
    symbol = CharField(max_length=10)
    year_start = CharField(max_length=10)
    supervisor = ForeignKey(User, on_delete=DO_NOTHING)

    def __str__(self):
        return self.year_start + self.symbol


class Course(Model):
    name = CharField(max_length=128)
    teacher = ForeignKey(User, on_delete=DO_NOTHING)
    team = ForeignKey(Team, on_delete=CASCADE)

    def __str__(self):
        return f'{self.name} {self.team}'


class Lesson(Model):
    name = CharField(max_length=128)
    description = TextField()
    course = ForeignKey(Course, on_delete=CASCADE)

    def __str__(self):
        return self.name


class Post(Model):
    author = ForeignKey(User, on_delete=CASCADE)
    course = ForeignKey(Course, on_delete=CASCADE)
    content = TextField()
    published = DateTimeField()

    def __str__(self):
        return f'{self.author} {self.course}'


@receiver(post_save, sender=Team, dispatch_uid='create_advisory_course')
def create_advisory(sender, instance, **kwargs):
    Course.objects.create(name='Advisory', teacher=instance.supervisor, team=instance)