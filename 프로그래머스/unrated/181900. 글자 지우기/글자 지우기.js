function solution(s, i) {
  const result = Array.from(new Set(i));
  return s
    .split('')
    .filter((c, idx) => !result.includes(idx))
    .join('');
}