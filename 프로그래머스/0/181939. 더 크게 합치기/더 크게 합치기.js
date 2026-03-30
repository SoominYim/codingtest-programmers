function solution(a, b) {
    const [x, y] = [a+'', b+'']
    return Math.max(x+y,y+x);
}