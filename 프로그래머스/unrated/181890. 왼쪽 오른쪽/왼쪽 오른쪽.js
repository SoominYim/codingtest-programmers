function solution(strList) {
    const lIndex = strList.indexOf('l');
    const rIndex = strList.indexOf('r');

    return lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)
        ? strList.slice(0, lIndex)
        : rIndex !== -1 && (lIndex === -1 || rIndex < lIndex)
            ? strList.slice(rIndex + 1)
            : [];
}