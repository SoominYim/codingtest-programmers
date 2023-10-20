const solution = (num, n) => num.reduce((acc, cur) => acc > n ? acc : acc+cur, 0)
