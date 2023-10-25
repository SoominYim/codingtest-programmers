const solution = array => {
  let map = new Map();
  // map 객체 초기화
  for(let i = 0; i <= Math.max(...array); i++){
    map.set(i,0);
  }
  // array 원소값과 일치하면 map의 key 증가
  for(let i = 0; i < array.length; i++){
    map.set(array[i], map.get(array[i])+1)
  }
  // map의 value만 모아서 배열 생성
  let arr = [...map.values()]
  // values의 최댓값 저장
  let max = Math.max(...arr);
  // 최댓값이 하나만 있다면 max 값 아니면 -1
  return arr.indexOf(max) === arr.lastIndexOf(max) ? arr.indexOf(max) : -1
}