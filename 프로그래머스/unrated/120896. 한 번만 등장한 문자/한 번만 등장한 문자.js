const solution = s => [...s].filter(v=> s.indexOf(v) === s.lastIndexOf(v)).sort().join('')