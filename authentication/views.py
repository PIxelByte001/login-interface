from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import user_data


# Create your views here.

def _login(request):
    context = {'message' : ''}
    if request.method == 'POST':
        user = authenticate(
            username = request.POST.get('username'),
            password = request.POST.get('password'),
        )
        try:
            login(request, user)
            return redirect('home')
        except:
            if user is None:
                message='Invalid username or password'

            context['message'] = message
    
    return render(request, 'login.html', context)


def signup(request):
    context={}
    if request.method == 'POST':
        username = request.POST.get('username')

        try:
            user = User(
                username = username,
            )
            user.set_password(request.POST.get('password'))
            user.save()

            details = user_data(
                Username = User.objects.get(username=username),
                type = request.POST.get('type'),
                First_Name = request.POST.get('first_name'),
                Last_Name = request.POST.get('last_name'),
                pic = request.POST.get('photograph'),
                email = request.POST.get('email'),
                Address_line = request.POST.get('address'),
                city = request.POST.get('city'),
                state = request.POST.get('state'),
                pincode = request.POST.get('pincode'),
            )
            details.save()
        except:
            message='User already exists, please login'
            context={'message':message}

        login(request, user)
        return redirect('home')

    return render(request, 'signup.html', context)


def _logout(request):
    logout(request)
    return redirect('login')

@login_required(login_url="auth/login")
def home(request):
    context = {'identity' : user_data.objects.get(Username=request.user)}
    return render(request, 'index.html', context)