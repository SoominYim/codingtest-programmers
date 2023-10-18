const solution = n => {
  var result = Array.from(Array(n),_=> Array(n).fill(0));
  for(let i = 0; i < n; i++){
    result[i][i] = 1;
  }
  return result
}