def hash_func(aString, tableSize):
    res = 0
    for index in range(len(aString)):
        res += ord(aString[index])
    return res % tableSize


# refactor: add weight for each of char
def hash_func2(aString, tableSize):
    res = 0
    for index in range(len(aString)):
        res += ord(aString[index]) * (index + 1)
    return res % tableSize


print(hash_func2('abc', 12))
print(hash_func2('bac', 12))
print(hash_func2('cab', 12))
