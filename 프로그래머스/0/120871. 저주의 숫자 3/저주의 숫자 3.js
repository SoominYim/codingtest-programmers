const solution=n=>{for(let i=1;i<=n;i++)if(i%3==0||[...i+''].includes('3'))n+=1;return n;}