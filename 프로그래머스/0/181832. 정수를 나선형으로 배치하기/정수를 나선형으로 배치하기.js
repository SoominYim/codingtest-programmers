function solution(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push([]);
    }

    var num = 1;
    var direction = 'right';
    var row = 0;
    var col = 0;

    while (num <= n * n) {
        result[row][col] = num;
        num++;

        // 오른쪽 방향
        if (direction === 'right') {
            if (col + 1 < n && result[row][col + 1] === undefined) {
                col++;
            } else {
                direction = 'down';
                row++;
            }
        }
        // 아래쪽 방향
        else if (direction === 'down') {
            if (row + 1 < n && result[row + 1][col] === undefined) {
                row++;
            } else {
                direction = 'left';
                col--;
            }
        }
        // 왼쪽 방향
        else if (direction === 'left') {
            if (col - 1 >= 0 && result[row][col - 1] === undefined) {
                col--;
            } else {
                direction = 'up';
                row--;
            }
        }
        // 위쪽 방향
        else if (direction === 'up') {
            if (row - 1 >= 0 && result[row - 1][col] === undefined) {
                row--;
            } else {
                direction = 'right';
                col++;
            }
        }
    }

    return result;
}