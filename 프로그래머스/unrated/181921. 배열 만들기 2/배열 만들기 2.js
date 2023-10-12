const solution = (l, r) => {
  const result = [];

  for (let num = l; num <= r; num++) {
    const strNum = num.toString();
    if (/^[05]+$/.test(strNum)) {
      result.push(num);
    }
  }

  return result.length === 0 ? [-1] : result;
}
    