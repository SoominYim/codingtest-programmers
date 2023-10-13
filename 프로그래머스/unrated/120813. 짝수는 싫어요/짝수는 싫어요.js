const solution = n => {
  let arr = []
  for(let i = 1; i <= n; i++){
      if(i%2) arr.push(i)
  }
  return arr
}