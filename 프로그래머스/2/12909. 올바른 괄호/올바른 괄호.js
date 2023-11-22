const solution = s => {
  let stack = 0;
  
  for(let i = 0; i < s.length; i++){
    stack += s[i] === "(" ? 1 : -1
    if(stack < 0) return false
  }
  return stack === 0 ? true : false
}