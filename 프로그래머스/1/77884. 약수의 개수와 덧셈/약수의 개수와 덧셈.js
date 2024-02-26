const solution=(left,right)=>Array.from({length:right-left+1},(_,i)=>i+left).reduce((acc,cur)=>acc+(Number.isInteger(Math.sqrt(cur))?-1:1)*cur,0);
