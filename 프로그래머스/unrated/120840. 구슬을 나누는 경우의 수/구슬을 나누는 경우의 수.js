const solution = (balls,share) => factorial(balls)/(factorial((balls-share))*factorial(share));

const factorial = n => {
  let result = BigInt(1);
  for(let i = n; i >= 2; i--){
    result *= BigInt(i)
  }
  return result
}