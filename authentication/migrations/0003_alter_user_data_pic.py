# Generated by Django 5.0.2 on 2024-07-29 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_data_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_data',
            name='pic',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
