def quickSort(alist):
    def partition(left, right):
        if left >= right:
            return
        # 确定基准值pivot
        pivot = alist[right]
        # 必须定义左右指针
        i = left
        j = right - 1
        while i <= j:
            while alist[i] < pivot:
                i += 1
            while alist[j] > pivot:
                j -= 1
            if i <= j:
                alist[i], alist[j] = alist[j], alist[i]
                i += 1
                j -= 1
        alist[i], alist[right] = alist[right], alist[i]
        partition(left, j)
        partition(i + 1, right)

    partition(0, len(alist) - 1)
    return alist


print(quickSort([4, 2, 5, 3, 1]))k
