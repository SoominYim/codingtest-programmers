const solution = arr => {
  const arrSort = arr.slice().sort((a,b) => a-b).pop() 
  return [arrSort,arr.indexOf(arrSort)]
}