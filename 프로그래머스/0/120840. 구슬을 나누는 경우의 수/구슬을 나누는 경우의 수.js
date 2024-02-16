const solution=(balls,share)=>Math.round((n=>n?n*solution(n-1):1)(balls)/((n=>n?n*solution(n-1):1)(balls-share)*(n=>n?n*solution(n-1):1)(share)));
