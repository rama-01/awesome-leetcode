def selectionSort(alist):
    for i in range(len(alist), 0, -1):
        maxVal, maxIndex = float('-inf'), None
        for j in range(i):
            if alist[j] > maxVal:
                maxVal, maxIndex = alist[j], j
            j += 1
        alist[maxIndex], alist[i - 1] = alist[i - 1], alist[maxIndex]
    return alist


# standard answer
def selectionSort2(alist):
    for fillslot in range(len(alist) - 1, 0, -1):
        positionOfMax = 0
        for location in range(1, fillslot + 1):
            if alist[location] > alist[positionOfMax]:
                positionOfMax = location

        temp = alist[fillslot]
        alist[fillslot] = alist[positionOfMax]
        alist[positionOfMax] = temp


print(selectionSort([3, 2, 5, 4, 1]))
