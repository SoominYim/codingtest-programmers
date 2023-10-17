const solution = my_string => {
  const num = my_string.match(/[0-9]+/g)
  return num ? num.reduce((acc,cur) => +acc+(+cur),0) : 0
}