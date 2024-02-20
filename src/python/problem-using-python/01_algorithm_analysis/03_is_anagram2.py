# 排序和比较
def is_anagram(s1, s2):
    if len(s1) != len(s2):
        return False

    alist1 = list(s1)
    alist2 = list(s2)

    alist1.sort()
    alist2.sort()

    pos = 0
    while pos < len(s1):
        if alist1[pos] != alist2[pos]:
            return False
        pos += 1

    return True


print(is_anagram('hello', 'olley'))
