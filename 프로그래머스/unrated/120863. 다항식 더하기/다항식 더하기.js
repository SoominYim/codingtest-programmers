const solution = p => {
  let x = 0;
  let constTerm = 0;
  let result = '';
  
  p.split(' ').forEach(v => {
    if (v.includes("x")) {
      let coeff = v.includes("x") ? (v.replace("x", "") || "1") : "1";
      x += parseInt(coeff);
    } else {
      constTerm += parseInt(v) || 0;
    }
  });
  
  if(x !== 0){
    result += x === 1 ? "x" : x+"x"
  }
  
  if(constTerm !== 0){
    x !==0 ? result+= ' + '+constTerm : result += constTerm
  }
  return result
}
