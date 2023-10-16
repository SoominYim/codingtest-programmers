const solution = (s, p) => {
  let count = 0;
  for (let i = 0; i <= s.length - p.length; i++) {
    if (s.slice(i, i + p.length) === p) {
      count++;
    }
  }
  return count;
};