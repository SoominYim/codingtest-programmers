function solution(n) {
    let a = 1;
    let b = 1;
    while (a*b < n) 
    {b *= ++a;}
    return a; 
}