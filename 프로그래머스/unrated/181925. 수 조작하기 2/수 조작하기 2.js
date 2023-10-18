const solution = (numLog) => {
  return numLog.reduce((control, num, i) => 
  i === 0 ? control : 
  control +
  (num - numLog[i - 1] === 1 ? 'w' : 
   num - numLog[i - 1] === -1 ? 's' : 
   num - numLog[i - 1] === 10 ? 'd' : 'a')
  , '');
};