const solution = (numbers,n)=>{
    let answer = 0;
    for (const v of numbers) {
        answer += v;
        if (answer > n) {
            return answer;
        }
    }
    return answer;
};