function solution(p, k) {
    return p.reduce((acc, cur) => {
    const r = cur.split('').map(v => v.repeat(k)).join('');
    for(let i = 0; i < k; i++){
      acc.push(r)
    }
    return acc
  },[])
}