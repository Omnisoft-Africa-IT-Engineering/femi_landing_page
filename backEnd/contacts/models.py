from django.db import models

class Contact(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    tel = models.CharField(max_length=30)
    entreprise = models.CharField(max_length=150)
    message = models.TextField(blank=True)
    cree_le = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom} ({self.entreprise})"