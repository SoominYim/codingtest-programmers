const solution = numbers => numbers.flatMap((x,i)=>numbers.slice(i+1).map(y=>x*y)).sort((a,b)=>b-a)[0];