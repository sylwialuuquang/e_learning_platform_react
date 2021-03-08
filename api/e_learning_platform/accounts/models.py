from datetime import datetime
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.db.models import Model, OneToOneField, CASCADE, ForeignKey, DO_NOTHING, ImageField
from django.contrib.auth.models import User

from viewer.models import Team

class Profile(Model):
    user = OneToOneField(User, on_delete=CASCADE, related_name='profile')
    avatar = ImageField(upload_to='avatar', default='default.png')
    team = ForeignKey(Team, on_delete=DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'created': datetime.now(),
            'user_id': user.id,
            'groups': map(lambda x: {'name': x.name, 'id': x.id}, user.groups.all()),
        })


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)