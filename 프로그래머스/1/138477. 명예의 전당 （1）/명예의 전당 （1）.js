const solution = (k,s) => {
  var a = [];
  var m = [];
  s.forEach(n => {
    m.push(n)
    m.sort((a,b) => b-a).splice(k)
    a.push(Math.min.apply(null,m))
  })
  return a
}