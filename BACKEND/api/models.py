from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(unique=True,max_length=100)
    start_date= models.DateField()
    end_date= models.DateField()
    comments = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name