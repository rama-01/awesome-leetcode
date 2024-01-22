const sortArr = (arr: any[], fn: (x: any) => number) =>
  arr.sort((a, b) => fn(a) - fn(b))

export {}
