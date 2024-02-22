def binarySearch(alist, target):
    if len(alist) == 0:
        return False
    else:
        mid = len(alist) // 2
        if alist[mid] == target:
            return True
        elif alist[mid] < target:
            return binarySearch(alist[mid + 1:], target)
        else:
            return binarySearch(alist[:mid], target)


print(binarySearch([1, 2, 3, 4, 5], 5))
