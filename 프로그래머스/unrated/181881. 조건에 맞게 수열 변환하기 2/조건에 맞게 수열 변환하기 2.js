const solution = arr => {
  let idx = 0;
  while(true) {
     let newArr = arr.map(v => (v >= 50 && !(v % 2) ? v / 2 : v < 50 && v % 2 ? v * 2 + 1 : v
     ));
    if (arr.every((v, i) => v === newArr[i])) {     
       break;
    }
    arr = newArr;
    idx++;
  }
  return idx++
}