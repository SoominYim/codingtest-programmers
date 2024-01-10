const solution = (i,j,k) => {
  const arr = Array.from({length : j-i+1},(_,idx)=> i+idx).join('')
  return arr.split(k).length-1
}
