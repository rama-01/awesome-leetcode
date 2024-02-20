def is_anagram1(s1, s2):
    if len(s1) != len(s2):
        return False
    # 因为字符串是不可变对象，所以转换成list方便处理
    l2 = list(s2)
    pos1 = 0
    while pos1 < len(s1):
        found = False
        pos2 = 0
        while pos2 < len(l2):
            if s1[pos1] == l2[pos2]:
                l2[pos2] = None
                found = True
                break
            else:
                pos2 += 1
        if not found:
            return False
        pos1 += 1
    return True


print(is_anagram1('hello', 'elloh'))
