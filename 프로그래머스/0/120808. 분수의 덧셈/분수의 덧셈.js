function solution(numer1, denom1, numer2, denom2) {

    const lcm = leastCommonMultiple(denom1, denom2);

    const newNumer1 = numer1 * (lcm / denom1);
    const newNumer2 = numer2 * (lcm / denom2);

    const sumNumer = newNumer1 + newNumer2;
    
    const gcd = greatestCommonDivisor(sumNumer, lcm);
    
    const simplifiedNumer = sumNumer / gcd;
    const simplifiedDenom = lcm / gcd;
    
    return [simplifiedNumer, simplifiedDenom];
}

function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}
