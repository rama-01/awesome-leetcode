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

export {}
