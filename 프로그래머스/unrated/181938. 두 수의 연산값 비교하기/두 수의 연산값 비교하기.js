function solution(a, b) {
    var sa = ~~(String(a) +b)
    return sa > 2*a*b ? sa : sa == 2*a*b ? sa : 2*a*b  
}