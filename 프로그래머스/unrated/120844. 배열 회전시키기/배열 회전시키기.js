const solution = (numbers,direction) => numbers = direction === 'right' ? [numbers.pop(),...numbers] : [...numbers.slice(1),numbers.shift()]