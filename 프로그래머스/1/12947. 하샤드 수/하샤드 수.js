const solution=x=>!(x%[...x+''].reduce((a,c)=>a+ +c,0))