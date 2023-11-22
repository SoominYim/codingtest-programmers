const solution = (left, right) => Array.from({ length: (right - left) + 1 }, (_, i) => {
        const num = left + i;
        const divisorCount = Array.from({ length: num }, (_, j) => j + 1)
            .filter((v) => num % v === 0)
            .length;
        return divisorCount % 2 === 0 ? num : -num;
    }).reduce((acc, cur) => acc + cur, 0);
  