function solution(A,B){
    const Bsort = B.sort((a,b)=>b-a);
    return A.sort((a,b)=>a-b).reduce((acc,cur,idx)=> acc+=cur*Bsort[idx],0)
}