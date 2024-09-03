const solution = (brown,yellow) => {
  let a = []
  let TOTAL = brown+yellow
 
  for(let i = 2; i < TOTAL/2; i++){
      if(TOTAL%i===0) a.push([TOTAL/i,i]);
  }
  return a.filter(v=>(v[0]+v[1])*2-4 === brown)[0];
}