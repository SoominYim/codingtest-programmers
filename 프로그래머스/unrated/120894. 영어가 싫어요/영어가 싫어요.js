const solution = numbers => {
  const strNum = ["zero","one",'two','three','four','five','six','seven','eight','nine']
  strNum.forEach((v,i)=> numbers = numbers.replaceAll(v,i))
  return +numbers
}