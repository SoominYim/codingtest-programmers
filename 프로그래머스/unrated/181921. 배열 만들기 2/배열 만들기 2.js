const solution = (l, r) => {
  const result = [];

  for (let i = l; i <= r; i++) {
    const strNum = i.toString();
    if (/^[05]+$/.test(strNum)) {
      result.push(i);
    }
  }

  return result.length === 0 ? [-1] : result;
}
    