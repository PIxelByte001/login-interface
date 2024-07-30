from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class user_data(models.Model):
    id=None
    Username = models.OneToOneField(User, to_field='username', on_delete=models.CASCADE, primary_key=True)
    type = models.CharField(max_length=7, choices={'doctor':'doctor', 'patient':'patient'})
    First_Name = models.CharField(max_length=100, blank=False)
    Last_Name = models.CharField(max_length=100, blank=False)
    pic = models.ImageField(upload_to='images/')
    email = models.EmailField()
    Address_line = models.TextField(max_length=300)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.IntegerField()

    REQUIRED_FIELDS = []

    def __str__(self):
        return str(self.Username)