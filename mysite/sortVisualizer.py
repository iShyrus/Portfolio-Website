import numpy as np

def numListToArr(nums):
    stringNums = str(nums)
    toRemove = ["'","[","]"]

    for char in toRemove:
        stringNums = stringNums.replace(char,"")

    numList = stringNums.split()      
    numList = list(map(int, numList))

    return numList 

def removeDuplicateArr(processArr):

    length = len(processArr)
    noDuplicatesArr = []
    count = 0

    while count < length:
        if processArr[count] not in noDuplicatesArr:
            noDuplicatesArr.append(processArr[count])
        count+=1


    return noDuplicatesArr

#--------------------------------Insertion sort
def insertionSort(arr):

    arrLength = len(arr)
    processArr = []
    changingKeys = []
    indexOfKeys = []
    ret =[]

    for x in range(arrLength):
      
        key = arr[x]
        y=x-1
        if y>= 0 and key<arr[y]:
            changingKeys.append(key)
            indexOfKeys.append(x)

        
        while y >= 0 and key < arr[y]:
            arr[y+1] = arr[y]
            y -=1

        arr[y+1] = key
        arr2 = arr[:]
        processArr.append(arr2)

    ret.append(removeDuplicateArr(processArr))
    ret.append(changingKeys)
    ret.append(indexOfKeys)

    return ret


#--------------------------------Merge Sort
def merge(arr, left, mid, right):
    leftLen = mid - left + 1
    rightLen = right - mid
    leftArr = [0] * (leftLen)
    rightArr = [0] * (rightLen)
 
    for i in range(0, leftLen):
        leftArr[i] = arr[left + i]
 
    for j in range(0, rightLen):
        rightArr[j] = arr[mid + 1 + j]
 
    i = 0     
    j = 0     
    k = left
 
    while i < leftLen and j < rightLen:
        if leftArr[i] <= rightArr[j]:
            arr[k] = leftArr[i]
            i += 1
        else:
            arr[k] = rightArr[j]
            j += 1
        k += 1
 

    while i < leftLen:
        arr[k] = leftArr[i]
        i += 1
        k += 1
 

    while j < rightLen:
        arr[k] = rightArr[j]
        j += 1
        k += 1
    print(arr)


def mergeSort(arr, left, right):
    if left < right:
        mid = left+(right-left)//2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        merge(arr, left, mid, right)

#--------------------------------
def partition(array, low, high):

    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i = i + 1
            (array[i], array[j]) = (array[j], array[i])

    print(array)
    (array[i + 1], array[high]) = (array[high], array[i + 1])
    return i + 1
 
 
 
def quickSort(array, low, high):
    if low < high:

        pi = partition(array, low, high)
        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)