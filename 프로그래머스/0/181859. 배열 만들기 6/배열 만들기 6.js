const solution=arr=>{let stk=[];let i=0;while(i<arr.length)stk.length==0?(stk.push(arr[i]),i++):stk[stk.length-1]==arr[i]?(stk.pop(),i++):(stk.push(arr[i]),i++);return stk.length==0?[-1]:stk}
