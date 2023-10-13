const solution = sides => {
  let sidesSort = sides.sort((a,b) => a-b)
  return sidesSort[2] < sidesSort[0] + sidesSort[1] ? 1:2
}