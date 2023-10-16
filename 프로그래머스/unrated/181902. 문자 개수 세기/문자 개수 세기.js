const solution = s => [...s].reduce((count, char) => {
    if (/[A-Za-z]/.test(char)) {
        const index = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + (char < 'a' ? 0 : 26);
        count[index]++;
    }
    return count;
}, Array(52).fill(0));
