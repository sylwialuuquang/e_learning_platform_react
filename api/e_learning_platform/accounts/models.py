from django.db.models import Model, OneToOneField, CASCADE, ForeignKey, DO_NOTHING, ImageField
from django.contrib.auth.models import User

from viewer.models import Team

class Profile(Model):
    user = OneToOneField(User, on_delete=CASCADE, related_name='profile')
    avatar = ImageField(upload_to='avatar', default='default.png')
    team = ForeignKey(Team, on_delete=DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'