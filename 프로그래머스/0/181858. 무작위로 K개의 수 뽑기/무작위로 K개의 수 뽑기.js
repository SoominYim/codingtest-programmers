const solution=(arr,k)=> Array.from({length:k},(_,i)=>[...new Set(arr)][i]).map(v=>v==null?-1:v)