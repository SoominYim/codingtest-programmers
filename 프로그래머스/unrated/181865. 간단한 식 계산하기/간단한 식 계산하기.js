const solution = binomial => {
  const b = binomial.split(' ')
  return b[1] === "+" ? +b[0] + +b[2] : b[1] === "-" ? +b[0] - +b[2] : +b[0] * +b[2]
}