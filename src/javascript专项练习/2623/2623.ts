type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
    // 类型注解 : Record<any, any> 用于指定变量 cache 的类型.Record<any, any> 表示一个键值对的集合，其中键和值可以是任意类型
    const cache: Record<any, any> = {};

    return function (...args) {
        if (args in cache) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */