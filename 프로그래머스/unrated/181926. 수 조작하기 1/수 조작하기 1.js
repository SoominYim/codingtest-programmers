const solution = (n, c) => [...c].reduce((acc, char) =>
    char === 'w' ? acc + 1 :
    char === 's' ? acc - 1 :
    char === 'd' ? acc + 10 :
    char === 'a' ? acc - 10 : acc, n);