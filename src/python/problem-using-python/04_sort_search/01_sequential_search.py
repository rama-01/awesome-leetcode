def sequential_search(alist, item):
    pos = 0
    while pos < len(alist):
        if alist[pos] == item:
            return True
        pos += 1
    return False


def sequential_search2(alist, target):
    for item in alist:
        if item == target:
            return True
    return False


print(sequential_search([1, 2, 3, 4, 5], 5))
print(sequential_search2([1, 2, 3, 4, 5], 6))
