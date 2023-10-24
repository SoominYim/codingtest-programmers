const solution = ([x,y]) => {
  let a = Math.sign(x)
  let b = Math.sign(y)
  return a===1&&b===1 ? 1 : a===-1&&b===1 ? 2 : a===-1&&b===-1 ? 3 : 4
}