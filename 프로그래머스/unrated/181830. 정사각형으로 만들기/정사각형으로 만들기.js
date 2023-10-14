const solution = arr =>{
  const row = arr.length ;
  const col = arr[0].length;
  
  if(row > col){
  return arr.map(v=>[...v,...Array(row - col).fill(0)])
  }
  if(col > row){
    for(let i = 0; i < col-row; i++){
  arr.push(Array(col).fill(0))
    }
  }
  return arr
}