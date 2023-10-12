function solution(a, q) {
  for (let i = 0; i < q.length; i++) {
    i%2 ? a.splice(0,q[i]) : a.splice(q[i]+1)
  }
  return a
}