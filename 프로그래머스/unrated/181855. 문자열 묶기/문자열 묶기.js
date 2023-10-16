const solution = arr => {
  const group = {};
 
  for(const str of arr) {
    group[str.length] = (group[str.length] || 0 ) +1
  }
  return Math.max(...Object.values(group))
}