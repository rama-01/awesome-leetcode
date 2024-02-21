from pythonds.basic.queue import Queue


def hot_potato(name_list, num):
    queue = Queue()
    for name in name_list:
        queue.enqueue(name)

    while queue.size() > 1:
        for i in range(num):
            queue.enqueue(queue.dequeue())
        queue.dequeue()
    return queue.dequeue()


print(hot_potato(["Bill", "David", "Susan", "Jane", "Kent", "Brad"], 7))
