def list_sum(alist):
    if len(alist) == 1:
        return alist[0]
    else:
        return alist[0] + list_sum(alist[1:])


print(list_sum([1, 2, 3, 4, 5]))
