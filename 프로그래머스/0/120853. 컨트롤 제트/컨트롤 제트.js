const solution=s=>s.split(' ').reduce((a,c,i,arr) =>c=='Z'?a- +(arr[i-1]):a+ +c,0);
