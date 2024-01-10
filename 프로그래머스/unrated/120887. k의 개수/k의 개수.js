const solution = (i,j,k) =>  Array.from({length : j-i+1},(_,idx)=> i+idx).join('').split(k).length-1

