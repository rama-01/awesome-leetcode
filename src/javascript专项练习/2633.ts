const jsonStringify = (object: any): string => {
  if (object === null) return 'null'
  if (typeof object === 'string') return `"${object}"`  //字符串要求是双引号
  if (typeof object === 'number' || typeof object === 'boolean') return object.toString()
  if (Array.isArray(object)) {
    return `[${object.map(jsonStringify).join(',')}]`
  }
  if (typeof object === 'object') {
    return `{${Object.entries(object)
      .map(([key,value]) => `${jsonStringify(key)}:${jsonStringify(value)}`)
      .join(',')
    }}`
  }
  return ''
}

const object = {"key":{"a":1,"b":[{},null,"Hello"]}}
console.log(typeof jsonStringify(object));

export {}
