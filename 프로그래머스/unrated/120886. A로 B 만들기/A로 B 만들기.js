const solution = (before, after) => +(JSON.stringify([...before].sort()) === JSON.stringify([...after].sort()))