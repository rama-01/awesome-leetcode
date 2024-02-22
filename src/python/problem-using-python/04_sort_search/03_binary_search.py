def binary_search(alist, target):
    left = 0
    right = len(alist) - 1
    while left <= right:
        mid = (left + right) // 2
        if alist[mid] == target:
            return True
        elif alist[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return False


print(binary_search([1, 2, 3, 4, 5], 6))
