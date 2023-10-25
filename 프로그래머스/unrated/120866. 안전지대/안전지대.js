const solution = board => {
  // 지뢰 위치 이외에 8방향 위험지역 좌표
  const x = [-1, -1, -1, 0, 0, 1, 1, 1];
  const y = [-1, 0, 1, -1, 1, -1, 0, 1];
  // 안전지역 저장 할 변수
  let safe = 0;
  
  // 안전 지역을 표시할 board와 같은 배열
  const arr = Array.from({ length: board.length }, () => Array.from({ length: board.length }, () => 0));
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 지뢰가 있는 구역(셀이 1인 구역)
      if (board[i][j] === 1) {
        // 위험지역을 1로 표시
        arr[i][j] = 1;
      } else {
        // 위험지역이 아닌 구역(셀이 0 인 구역)일 경우 주변 8방향 셀 검사
        let isSafe = true;
        
        // 8방향 검사
        for (let k = 0; k < 8; k++) {
          const ni = i + x[k];
          const nj = j + y[k];
          // 주변 셀이 배열 범위 내에 있고, 주변 셀이 위험지역 일 경우
          if (ni >= 0 && ni < board.length && nj >= 0 && nj < board.length && board[ni][nj] === 1) {
            // 위험 지역임을 체크 하고 종료
            isSafe = false;
            break;
          }
        }
        // 주변 셀이 안전 할 경우
        if (isSafe) {
          // 새로운 배열에서 해당위치를 0으로 표시
          arr[i][j] = 0;
          // 안전지역 증가
          safe++;
        }
      }
    }
  }

  return safe;
}
