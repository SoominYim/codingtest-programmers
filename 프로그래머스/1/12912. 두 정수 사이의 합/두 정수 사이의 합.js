const solution=(a,b)=>Array.from({length:Math.max(a,b)-Math.min(a,b)+1},(_,i)=>i+Math.min(a,b)).reduce((a,c)=>a+c)