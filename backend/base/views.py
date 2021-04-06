# from django.shortcuts import render
# from django.http import JsonResponse
# Create your views here.
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product 
from .serializers import ProductSerializer
@api_view(['GET'])
def getRoutes(request) : 
    routes = [
        '/api/products/',
        '/api/products/create', 

        '/api/products/upload',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]

    return Response(routes)


@api_view(['GET'])
def getProducts(request) :
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data )



@api_view(['GET'])
def getProduct(request, pk) :
    products = Product.objects.get(_id = pk) 
    serializer = ProductSerializer(products, many = False)
    # product = None
    # for pr in serializer.data :
    #     if(pr['_id'] == pk ) : 
    #         product = pr 
    #         break    



    return Response(serializer.data )