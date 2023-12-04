const solution = (n,t) => n.reduce((acc,cur) => {
  const counts = [];
  for(const count of acc){
    counts.push(count + cur);
    counts.push(count - cur);
  }
  return counts;
},[0]).filter(v=> v === t).length