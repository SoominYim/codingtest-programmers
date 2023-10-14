const solution = (a, k) => {
    const result = a.reduce((acc, cur) => {
        if (acc.set.has(cur)) {
            return acc;
        }
        acc.set.add(cur);
        acc.array.push(cur);
        return acc;
    }, { set: new Set(), array: [] }).array.slice(0, k);

    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
