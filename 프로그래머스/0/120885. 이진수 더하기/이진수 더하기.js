const solution = (bin1, bin2) => {
    let result = '';
    let carry = 0;
    let i = bin1.length - 1;
    let j = bin2.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        const bit1 = i >= 0 ? parseInt(bin1[i]) : 0;
        const bit2 = j >= 0 ? parseInt(bin2[j]) : 0;
        const sum = bit1 + bit2 + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
};