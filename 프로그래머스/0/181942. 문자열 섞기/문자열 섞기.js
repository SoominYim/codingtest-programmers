function solution(str1, str2) {
    var answer = [];
    
    for(i in str1) {
      answer.push(str1[i]);
      answer.push(str2[i]);
    }
    
    return answer.join('');
}