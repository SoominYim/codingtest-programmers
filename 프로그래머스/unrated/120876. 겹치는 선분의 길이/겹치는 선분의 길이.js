function solution(lines) {
  let line = Array.from({length : 200},v=> v=0)
  lines.forEach(([min,max]) => {
    for(;min < max; min++){
      line[min+100]++
    }
  })
  return line.filter(v=>v > 1).length;
 }