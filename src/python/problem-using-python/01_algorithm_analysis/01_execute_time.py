import time


def sum_of_n(n):
    start = time.perf_counter()  # 使用更高精度的时间函数
    current_sum = 0
    for x in range(1, n + 1):
        current_sum += x
    end = time.perf_counter()  # 使用更高精度的时间函数
    time_taken = "{:.10f}".format(end - start)
    return current_sum, time_taken


def sum_of_n_refactor(n):
    return n * (n + 1) / 2


# for _ in range(5):
#     print(sum_of_n(100000000))

for _ in range(5):
    print(sum_of_n_refactor(10000000000))
