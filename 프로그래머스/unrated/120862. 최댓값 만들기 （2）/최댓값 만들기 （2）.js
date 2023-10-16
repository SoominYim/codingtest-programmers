                                             
const solution = numbers => {
  const n = numbers.sort((a,b) => a-b);
  return n[0] * n[1] > numbers[n.length-1] * numbers[n.length-2] ? n[0] * n[1] : numbers[n.length-1] * numbers[n.length-2]
}