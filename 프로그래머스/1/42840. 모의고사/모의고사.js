const solution = (answers) => {
  var answer = [0,0,0]
  
  var a = [1, 2, 3, 4, 5]
  var b = [2, 1, 2, 3, 2, 4, 2, 5]
  var c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
           
   for (let i = 0; i < answers.length; i++) {
    if (a[i % a.length] === answers[i]) {
      answer[0]++;
    }
    if (b[i % b.length] === answers[i]) {
      answer[1]++;
    }
    if (c[i % c.length] === answers[i]) {
      answer[2]++;
    }
  }
  return [0,0,0].map((v,j) => {
    var max = Math.max(...answer);
    return answer[j] === max ? j+1 : null
  }).filter(v=>v)
}