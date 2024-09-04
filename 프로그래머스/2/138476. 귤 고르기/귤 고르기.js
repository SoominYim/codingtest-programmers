function solution(k, tangerine) {
    const map = {};
    for (const num of tangerine) {
        map[num] = (map[num] || 0) + 1;
    }
    var value = Object.values(map).sort((a, b) => b - a)
    var sum = 0;
    var count = 0;
    
    try {
      value.forEach(v=>{
        sum += v;
        count++;
        if (sum >= k) throw new Error();
       });
    } catch (error) {
      console.log('zz')
    }
    return count
}