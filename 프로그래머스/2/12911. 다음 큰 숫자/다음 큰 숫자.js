const solution = n => {
  const count = num => [...num.toString(2)].filter(v=>v==="1").length;
  let i = n+1
  while(count(i) !== count(n)){
    i++
  }
  return i
}