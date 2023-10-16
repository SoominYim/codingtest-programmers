const solution = num_list => {
  return num_list.reduce((total, num) => {
    while (num !== 1) {
      num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
      total += 1;
    }
    return total;
  }, 0);
};