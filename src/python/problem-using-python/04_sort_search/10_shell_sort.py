def gapInsertionSort(alist, start, gap):
    for i in range(start + gap, len(alist), gap):
        pos = i
        cur = alist[pos]
        while pos >= gap and alist[pos - 1] > cur:
            alist[pos] = alist[pos - gap]
            pos -= gap
        alist[pos] = cur


def shellSort(alist):
    subListCount = len(alist) // 2
    while subListCount > 0:
        for startPosition in range(subListCount):
            gapInsertionSort(alist, startPosition, subListCount)
        subListCount //= 2
    return alist


print(shellSort([5, 3, 4, 1, 2]))
