const solution = n => {
  let answer = [];
  
  for(let i = 0; i <= n.length; i++){
    for(let j = i+1; j <= n.length; j++){
      answer.push(n[i]+n[j])
    }
  }
  return answer.filter((v,i)=>answer.indexOf(v) === i).sort((a,b) => a-b)
}