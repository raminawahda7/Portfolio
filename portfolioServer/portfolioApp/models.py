from django.db import models

# Create your models here.
class PortfolioInfo(models.Model):

    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    github = models.URLField()
    demo = models.URLField(blank=True)
    # image = models.FileField(upload_to="photos/",blank=True)
    image = models.CharField(max_length=256,default='put ypur image ')
    show = models.BooleanField(default=False)

    def __str__(self):
        return self.name