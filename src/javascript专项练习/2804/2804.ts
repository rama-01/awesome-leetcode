declare global {
    interface Array<T> {
        forEach: (callbackFn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void
    }
}

Array.prototype.forEach = function <T>(callbackFn: (value: T, index: number, array: T[]) => void, context?: any): void {
    for (let i = 0; i < this.length; i++) {
        callbackFn.call(context, this[i], i, this)
    }
}

export {}
