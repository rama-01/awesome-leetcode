from timeit import Timer


def test1():
    l1 = []
    for i in range(1000):
        l1 += [i]


def test2():
    l1 = []
    for i in range(1000):
        l1.append(i)


def test3():
    l1 = [i for i in range(1000)]


def test4():
    l1 = list(range(1000))


t1 = Timer("test1()", "from __main__ import test1")
print("concat ", t1.timeit(number=1000), "milliseconds")
t2 = Timer("test2()", "from __main__ import test2")
print("append ", t2.timeit(number=1000), "milliseconds")
t3 = Timer("test3()", "from __main__ import test3")
print("comprehension ", t3.timeit(number=1000), "milliseconds")
t4 = Timer("test4()", "from __main__ import test4")
print("list range ", t4.timeit(number=1000), "milliseconds")
