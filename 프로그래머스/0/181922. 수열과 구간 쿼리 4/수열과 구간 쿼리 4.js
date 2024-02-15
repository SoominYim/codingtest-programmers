const solution=(arr,queries)=>queries.map(([s,e,k])=>{arr.forEach((n,i)=>{if(i>=s&&i<=e&&i%k==0)arr[i]++});return arr}).pop();
