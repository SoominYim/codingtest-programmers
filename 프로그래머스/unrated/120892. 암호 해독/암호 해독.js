const solution = (cipher,code) => [...cipher].filter((_,i) => (i+1)%code === 0 ).join('')