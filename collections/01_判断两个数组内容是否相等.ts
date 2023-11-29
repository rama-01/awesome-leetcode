// 数组转换为map数据结构
const arrayToMap = (arr: []): Map<any, number> => {
  const map = new Map()
  arr.forEach(item => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  return map
}

const areMapsEqual = (map1: Map<any, number>, map2: Map<any, number>): boolean => {
  if (map1.size !== map1.size) return false
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false
  }
  return true
}

const areArraysContentEqual = (arr1: [], arr2: []): boolean => {
  // 1. 判断数组长度是否相等
  // 2. 使用map数据类型标识重复的元素，Map中的键只能出现一次（和Set一样）
  // 3. 判断map是否相等
  if (arr1.length !== arr2.length) return false
  const map1 = arrayToMap(arr1)
  const map2 = arrayToMap(arr2)
  return areMapsEqual(map1, map2)
}


const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]
console.log(areArraysContentEqual(arr1,arr2));