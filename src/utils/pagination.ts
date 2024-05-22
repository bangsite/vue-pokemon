export const generatePaginationRange = (_current: number, _last: number) => {
    let current = _current,
        last = _last,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        index;

    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (index) {
            if (i - index === 2) {
                rangeWithDots.push(index + 1);
            } else if (i - index !== 1) {
                rangeWithDots.push('...');
            }
        }

        rangeWithDots.push(i);
        index = i;
    }

    return rangeWithDots;
}
