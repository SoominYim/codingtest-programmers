const solution = (ineq, eq, n, m) =>
(ineq === "<" && eq === "=" && n <= m) ||
(ineq === ">" && eq === "=" && n >= m) ||
(ineq === "<" && eq === "!" && n < m) ||
(ineq === ">" && eq === "!" && n > m)
? 1 : 0;