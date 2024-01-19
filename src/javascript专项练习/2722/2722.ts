type Obj = {
    id: number
    [property: string]: any
}

const joinedArray = (arr1: Obj[], arr2: Obj[]) => {
    let ans: Obj[] = []
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.find((p) => p.id === arr1[i].id)) {
            ans.push(arr1[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        const item = arr1.find((p) => p.id === arr2[j].id)
        if (!item) {
            ans.push(arr2[j])
        } else {
            //arr1中有此id
            const o: any = {}
            for (const key in item) {
                //arr2中无此键
                if (!Object.keys(arr2[j]).includes(key)) {
                    o[key] = item[key]
                }
            }
            for (const key in arr2[j]) {
                o[key] = arr2[j][key]
            }
            ans.push(o)
        }
    }
    ans.sort((a, b) => a.id - b.id)
    return ans
}

/* 标准答案 */
/* function join(arr1: any[], arr2: any[]): any[] {
  const d = new Map(arr1.map((x) => [x.id, x]))
  arr2.forEach((x) => {
    if (d.has(x.id)) {
      d.set(x.id, { ...d.get(x.id), ...x })  //相同的键，后面的值如何覆盖前面的值？
    } else {
      d.set(x.id, x)
    }
  })
  return [...d.values()].sort((a, b) => a.id - b.id)
} */

/* 重写以上方法 */
const join = (arr1: any[], arr2: any[]): any[] => {
    const map = new Map(arr1.map((i) => [i.id, i]))
    arr2.forEach((i) => {
        if (map.has(i.id)) {
            map.set(i.id, { ...map.get(i.id), ...i }) //相同属性值会自动覆盖
        } else {
            map.set(i.id, i)
        }
    })
    // 使用Map的values()方法，获取Map对象中所有的值，且返回一个迭代器对象
    return [...map.values()].sort((a, b) => a.id - b.id)
}

// const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
// const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
]
const arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
]

console.log(joinedArray(arr1, arr2))
console.log(join(arr1, arr2))

export { }
