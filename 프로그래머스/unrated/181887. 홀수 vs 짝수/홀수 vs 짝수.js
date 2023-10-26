const solution = num_list => Math.max(
  num_list.reduce((acc, cur, idx) => acc + (idx % 2 === 0 ? cur : 0), 0),
  num_list.reduce((acc, cur, idx) => acc + (idx % 2 !== 0 ? cur : 0), 0)
);