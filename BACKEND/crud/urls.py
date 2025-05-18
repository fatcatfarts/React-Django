
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('api.urls')),  # This line is changed to include api.urls.home),  # This line is added to include the home view from api.urls
]
