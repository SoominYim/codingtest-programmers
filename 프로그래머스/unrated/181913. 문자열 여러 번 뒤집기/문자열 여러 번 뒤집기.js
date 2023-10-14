const solution = (s, q) =>{
  for(const[start,end] of q){
    const r = [...s.slice(start,end+1)].reverse().join('');
    s = s.slice(0,start)+r+s.slice(end+1);
  }
  return s
}