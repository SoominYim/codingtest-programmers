function solution(operations) {
  var q = [];
  
  operations.map(v=>v.split(' ')).forEach(v=>{
    if(v[0] === 'I') q.push(+v[1]);
    else {
      var value = (v[1] === "1" ? Math.max : Math.min)(...q) 
      q.splice(q.indexOf(value),1) 
     }
  })
  return q.length ? [Math.max(...q),Math.min(...q)] : [0,0]
 }
