// transform string to map
const strToMap = (str: string): Map<string, number> => {
  const map = new Map()
  Array.from(str).forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  return map
}

const isMapEqual = <T>(map1: Map<T, number>, map2: Map<T, number>): boolean => {
  if (map1.size !== map2.size) return false
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false
  }
  return true
}

const isStrEqual = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false
  const map1 = strToMap(str1)
  const map2 = strToMap(str2)
  if (isMapEqual(map1, map2)) {
    return true
  } else {
    return false
  }
}

// 解法二 使用字典排序
const isAnagram = (str1: string, str2: string): boolean => {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
};


// console.log(isStrEqual('abc', 'bca'))
// console.log(isStrEqual('abc', 'bcd'))

console.log(isAnagram('abc','bca'));
console.log(isAnagram('abc','bcd'));

export {}
