const solution = s => {
  let answer = s;
  let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for(let i = 0; i < nums.length; i++){
  let arr = answer.split(nums[i]);
  answer = arr.join(i)
  }
  return +answer
}
