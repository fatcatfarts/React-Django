from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions
from .serializer import *
from rest_framework.response import Response 
from .models import *
# Create your views here.

def home(request):
    return HttpResponse("yo! i just started")

class Projectviewset(viewsets.ViewSet):
    permission_classes = {permissions.AllowAny}
    queryset = Project.objects.all()
    serializer = ProjectSerializer 
    

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass    
