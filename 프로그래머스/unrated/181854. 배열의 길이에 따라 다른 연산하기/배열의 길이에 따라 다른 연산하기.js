const solution = (arr, n) => arr.map((value, index) => index % 2 !== arr.length % 2 ? value + n : value);
