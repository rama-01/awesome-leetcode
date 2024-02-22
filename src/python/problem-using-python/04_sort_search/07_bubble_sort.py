def bubbleSort(alist):
    for i in range(len(alist) - 1):
        for j in range(len(alist) - 1):
            if alist[j + 1] < alist[j]:
                # tmp = alist[j]
                # alist[j] = alist[j + 1]
                # alist[j + 1] = tmp
                alist[j], alist[j + 1] = alist[j + 1], alist[j]
        i += 1
    return alist


# 1. refactor
def bubbleSort2(alist):
    for i in range(len(alist) - 1, 0, -1):
        for j in range(i):
            if alist[j + 1] < alist[j]:
                alist[j], alist[j + 1] = alist[j + 1], alist[j]
        i += 1
    return alist


# 2. short bubble sort
def shortBubbleSort(alist):
    exchanges = True
    i = len(alist) - 1
    while i >= 0 and exchanges:
        exchanges = False
        for j in range(i):
            if alist[j + 1] < alist[j]:
                exchanges = True
                alist[j], alist[j + 1] = alist[j + 1], alist[j]
        i -= 1
    return alist


# print(bubbleSort([3, 2, 4, 1, 5]))
# print(bubbleSort2([3, 2, 4, 1, 5]))
print(shortBubbleSort([3, 2, 4, 1, 5]))
