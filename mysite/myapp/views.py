from django.shortcuts import render
from django.http import HttpResponse
import sortVisualizer
import json

def homeScreen(request):

    print(sortVisualizer.insertionSort([2,1,3,4]))
    info = {"test":"hello"}

    post = dict(request.POST)
    if "numList" in post:
        print(post["numList"])

    return render (request, "home.html", {'info': info})



def sortingPage(request):
    post = dict(request.POST)
    numList = sortVisualizer.numListToArr(post["numList"])
    sortedArrProcess = sortVisualizer.insertionSort(numList)

    print("test")
    print(sortedArrProcess[0][0])

    
    test = sortVisualizer.quickSort(numList,0,len(numList)-1)


    return render(request, "sorting.html",{"sortedArrProcess":sortedArrProcess[0], "length":len(sortedArrProcess[0][0]), "changingKeys":json.dumps(sortedArrProcess[1])})