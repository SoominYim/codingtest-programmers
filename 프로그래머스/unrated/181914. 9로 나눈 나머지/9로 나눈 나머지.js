const solution = n => +[...n].map(Number).reduce((acc,cur) => acc + cur,0)%9