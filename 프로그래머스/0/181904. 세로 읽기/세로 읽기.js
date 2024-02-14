const solution=(my_string,m,c)=>[...my_string].filter((v,i)=>m>1?i%m==c-1:v).join('')
