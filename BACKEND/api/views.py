from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions, status
from .serializer import *
from rest_framework.decorators import action
from rest_framework.response import Response 
from .models import *
# Create your views here.

# def home(request):
#     return HttpResponse("yo! i just started")

class Projectviewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer 
    
    # @action(detail = False,methods=['get'])
    # def hello(self, request):
    #     print(request.data)
    #     print(1)
    #     return Response(status=status.HTTP_200_OK)
    def list(self,request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset,many = True)
        return Response(serializer.data)
 
    def create(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status = 400)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(pk = pk)
        serializer = self.serializer_class(project,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=400)
        
    def destroy(self, request, pk=None):
        project = self.queryset.get(pk = pk)
        project.delete()
        return Response(status=204) 
