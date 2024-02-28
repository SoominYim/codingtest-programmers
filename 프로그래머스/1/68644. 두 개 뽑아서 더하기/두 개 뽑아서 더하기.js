const solution=numbers=>[...new Set(numbers.flatMap((_,i)=>numbers.slice(i+1).map(v=>numbers[i]+v)))].sort((a,b)=>a-b)
