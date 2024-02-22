def insertionSort(alist):
    for index in range(1, len(alist)):
        pos = index
        cur = alist[pos]
        while pos > 0 and alist[pos - 1] > cur:
            alist[pos] = alist[pos - 1]
            pos -= 1
        alist[pos] = cur
    return alist


print(insertionSort([3, 2, 5, 4, 1]))
