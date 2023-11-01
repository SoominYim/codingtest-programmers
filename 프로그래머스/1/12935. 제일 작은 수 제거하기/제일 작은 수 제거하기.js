const solution = (arr) => {
  const min = Math.min(...arr);
  const result = arr.filter((num) => num !== min);

  return result.length === 0 ? [-1] : result;
};