const solution = num => {
  let count = 0;
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
    count > 500 ? (num = 1) : null;
  }
  return count > 500 ? -1 : count;
};