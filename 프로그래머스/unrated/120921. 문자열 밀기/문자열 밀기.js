const solution = (A, B) => {
  let arr = [...A];
  if(A===B) return 0
  for(let i=1; i<arr.length; i++){
    arr.unshift(arr.pop())
    if(arr.join('') === B){
      return i
    }
  }
  return -1
};