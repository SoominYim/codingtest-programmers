const solution = n => {
  let answer = 0;
  for(let a = 0; a <= n.length; a++){
    for(let b = a+1; b <= n.length; b++){
      for(let c = b+1; c<= n.length; c++){
        if(n[a] + n[b] + n[c] === 0) answer++
      }
    }
  }
  return answer
}