# 使用ASCII码
def is_anagram(s1, s2):
    """
        for i in range(len(s1)):
            pos = ord(s1[i]) - ord('a')
            c1[pos] += 1

        for j in range(len(s2)):
            pos = ord(s2[j]) - ord('a')
            c2[pos] += 1
    """

    # refactor
    def generate_code(s):
        c = [0] * 26
        for i in range(len(s)):
            pos = ord(s[i]) - ord('a')
            c[pos] += 1
        return c

    c1 = generate_code(s1)
    c2 = generate_code(s2)

    k = 0
    while k < 26:
        if c1[k] != c2[k]:
            return False
        k += 1
    return True

# 以上算法时间复杂度为O(n)
