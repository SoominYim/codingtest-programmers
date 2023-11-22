const solution = s => {
  let arr = [...s.split(' ')].sort((a,b) => a-b)
  return [arr[0],...arr.splice(arr.length-1)].join(' ')
}