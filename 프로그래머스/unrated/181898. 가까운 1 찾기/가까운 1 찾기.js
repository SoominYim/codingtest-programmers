const solution = (arr, idx) => {
  const nextIndex = arr.indexOf(1, idx);
  return nextIndex !== -1 ? nextIndex : -1;
};
