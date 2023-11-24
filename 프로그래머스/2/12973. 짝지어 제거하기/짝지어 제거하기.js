const solution = s => {
  const answer = [...s].reduce((stack, char) => {
    stack.length > 0 && stack[stack.length -1] === char ? stack.pop() : stack.push(char);
  return stack
  },[])
  return answer.length === 0 ? 1:0
}