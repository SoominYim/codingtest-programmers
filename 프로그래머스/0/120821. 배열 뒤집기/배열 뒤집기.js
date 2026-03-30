function solution(num_list) {
    const attachIndex = (arr, start = 0) =>
        arr.length === 0
            ? []
            : [{ index: start, value: arr[0] }].concat(attachIndex(arr.slice(1), start + 1));

    const merge = (left, right) => {
        if (!left.length) return right;
        if (!right.length) return left;

        return left[0].index > right[0].index
            ? [left[0], ...merge(left.slice(1), right)]
            : [right[0], ...merge(left, right.slice(1))];
    };

    const mergeSortDescByIndex = (arr) => {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSortDescByIndex(arr.slice(0, mid));
        const right = mergeSortDescByIndex(arr.slice(mid));

        return merge(left, right);
    };

    return mergeSortDescByIndex(attachIndex(num_list)).map(v => v.value);
}