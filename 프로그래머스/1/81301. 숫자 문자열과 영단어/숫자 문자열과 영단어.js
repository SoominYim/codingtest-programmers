const solution=s=>+(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((a,c,i)=>a.replace(new RegExp(c,'g'),i),s))