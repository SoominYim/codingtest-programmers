const f=n=>(n<=1?1:n*f(n-1));const solution=n=>{let i=0;while(f(i)<=n)i++;return i-1;
};