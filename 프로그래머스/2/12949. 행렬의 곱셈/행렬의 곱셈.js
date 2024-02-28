const solution=(arr1,arr2)=>arr1.map(v=>arr2[0].map((_,i)=>v.reduce((a,c,j)=>a+c*arr2[j][i],0)));
