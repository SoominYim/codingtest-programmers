const solution = (num_list) => Math.max(
  num_list.reduce((sum, num, index) => sum + (index % 2 === 0 ? num : 0), 0),
  num_list.reduce((sum, num, index) => sum + (index % 2 !== 0 ? num : 0), 0)
);