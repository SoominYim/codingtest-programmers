const solution=num=>(c=n=>n==1?0:n%2==0?c(n/2)+1:c(n*3+1)+1)(num)>=500?-1:c(num);
