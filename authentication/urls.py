from django.urls import path
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('login/', views._login, name = 'login'),
    path('signup/', views.signup, name = 'signup'),
    path('logout/', views._logout, name = 'logout')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)