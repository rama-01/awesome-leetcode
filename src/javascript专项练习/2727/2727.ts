type Obj = Array<any> | Record<any, any>

const isObjEmpty = (obj: Obj): boolean => {
  if (Array.isArray(obj) && !obj.length) {
    return true
  } else if (obj instanceof Object && !Object.keys(obj).length) {
    return true
  } else {
    return false
  }
}

export {}
