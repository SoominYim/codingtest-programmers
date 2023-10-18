function solution(a, qs) {
    for(const q of qs){
      for(let i = q[0] ; i <= q[1]; i++){
        a[i]++;
      }
    }
    return a;
}