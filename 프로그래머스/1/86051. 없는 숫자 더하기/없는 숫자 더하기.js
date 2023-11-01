const solution = n => Array.from({length : 10} , (_,i) => i).filter(x => !n.includes(x)).reduce((acc,cur) => acc + cur)
