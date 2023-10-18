const solution = s => {
  const ss = s.split(' ')
  
  while(ss.includes("Z")){
    ss.splice(ss.indexOf("Z")-1,2)
  }
  return ss.reduce((acc,cur) => acc + Number(cur),0)
}
