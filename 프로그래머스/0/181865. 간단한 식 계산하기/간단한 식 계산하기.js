const solution = binomial =>binomial.split(' ').reduce(([a, op, b], cur, index) =>{
    if (index % 2 === 0) {
        if (op === '+') return [a + parseInt(cur), op, b];
        if (op === '-') return [a - parseInt(cur), op, b];
        if (op === '*') return [a * parseInt(cur), op, b];
        } else {
            return [a, cur, b];
        }
    }, [0, '+', 0])[0];
