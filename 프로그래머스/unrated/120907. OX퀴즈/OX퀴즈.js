const solution = quiz => {
  const answer = []
  for (const ex of quiz) {
    const [x,op,y,eq,z] = ex.split(' ');
    answer.push((op === "+" ? +x+(+y) === +z : +x-(+y) === +z ) ? "O" : "X")
  }
  return answer
}