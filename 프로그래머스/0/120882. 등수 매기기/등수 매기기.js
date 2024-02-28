const solution=score=>score.map(([a,b])=>score.filter(([c,d])=>(c+d)/2>(a+b)/2).length+1);
