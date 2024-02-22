def ordered_sequential_search(alist, target):
    pos = 0
    while pos < len(alist):
        if alist[pos] < target:
            pos += 1
        elif alist[pos] == target:
            return True
        else:
            return False


print(ordered_sequential_search([1, 3, 5, 7, 9], 5))
