const solution = (keyinput, board) => {
  let x = 0;
  let y = 0;
  const width = Math.floor(board[0] / 2);
  const height = Math.floor(board[1] / 2);
  
  const move = {
    up:()=>{if(y<height)y++;},
    down:()=>{if(y>-height)y--;},
    left:()=>{if(x>-width)x--;},
    right:()=>{if(x<width)x++;}
  }
  for(const direction of keyinput){
    if(move[direction]){
      move[direction]()
    }
  }
  return [x,y]
}