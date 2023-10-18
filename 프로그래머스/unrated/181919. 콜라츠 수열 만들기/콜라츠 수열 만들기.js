function solution(n) {
    const collatzSeq = [n];
    
    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
        collatzSeq.push(n);
    }
    
    return collatzSeq;
}