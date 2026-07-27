from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ["nom", "entreprise", "email", "tel", "cree_le"]
    search_fields = ["nom", "entreprise", "email"]
    list_filter = ["cree_le"]

    